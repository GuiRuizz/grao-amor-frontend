"use client";

import { useState } from "react";
import { cn } from "@/src/lib/utils";
import { Button } from "@/src/components/ui/button";
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldSeparator,
} from "@/src/components/ui/field";
import { Input } from "@/src/components/ui/input";
import { useLogin } from "../hooks/use-login";
import { useRouter } from "next/navigation";
import { PasswordInput } from "@/src/components/password-input";


export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"form">) {
    const { mutate, isPending, error } = useLogin();
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault();

        mutate({
            email,
            password,
        });
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={cn("flex flex-col gap-6", className)}
            {...props}
        >
            <FieldGroup>
                <div className="flex flex-col items-center gap-1 text-center">
                    <h1 className="text-2xl font-bold">Entre com a sua conta</h1>
                    <p className="text-sm text-balance text-muted-foreground">
                        Digite o seu e-mail e senha para entrar em nosso sistema
                    </p>
                </div>

                <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Field>

                <Field>
                    <div className="flex items-center">
                        <FieldLabel htmlFor="password">Senha</FieldLabel>
                        <a
                            href="#"
                            className="ml-auto text-sm underline-offset-4 hover:underline"
                        >
                            Esqueceu a senha?
                        </a>
                    </div>

                    <PasswordInput
                        id="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Field>

                <Field>
                    <Button type="submit" disabled={isPending}>
                        {isPending ? "Entrando..." : "Login"}
                    </Button>
                </Field>

                {error && (
                    <p className="text-sm text-red-500 text-center">
                        Email ou senha inválidos
                    </p>
                )}

                <FieldSeparator>Ou continue com</FieldSeparator>

                <Field>
                    <Button variant="outline" type="button">
                        Login com o Google
                    </Button>

                    <FieldDescription className="text-center">
                        Não tem uma conta?{" "}
                        <a href="/register" className="underline underline-offset-4">
                            Inscreva-se
                        </a>
                    </FieldDescription>
                </Field>
            </FieldGroup>
        </form>
    );
}