"use client";

import { PasswordInput } from "@/src/components/password-input";
import { Button } from "@/src/components/ui/button";
import {
    FieldGroup,
    Field,
    FieldLabel,
    FieldDescription,
    FieldSeparator,
} from "@/src/components/ui/field";
import { Input } from "@/src/components/ui/input";
import { cn } from "@/src/lib/utils";
import { useState } from "react";
import { useRegister } from "../hooks/use-register";

export function RegisterForm({ className, ...props }: React.ComponentProps<"form">) {
    const { mutate, isPending, error } = useRegister();

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState<string | null>(null);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        // ✅ valida se as senhas coincidem
        if (password !== confirmPassword) {
            setPasswordError("As senhas não coincidem.");
            return;
        }

        setPasswordError(null); // limpa o erro

        mutate({
            name,
            email,
            password,

        });
    }

    return (
        <form onSubmit={handleSubmit} className={cn("flex flex-col gap-6", className)} {...props}>
            <FieldGroup>
                <div className="flex flex-col items-center gap-1 text-center">
                    <h1 className="text-2xl font-bold">Crie a sua conta</h1>
                    <p className="text-sm text-balance text-muted-foreground">
                        Preencha os campos para criar a sua conta
                    </p>
                </div>

                <Field>
                    <FieldLabel htmlFor="name">Nome completo</FieldLabel>
                    <Input
                        id="name"
                        type="text"
                        placeholder="João Guilherme"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Field>

                <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                        id="email"
                        type="email"
                        placeholder="m@exemplo.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Field>

                <Field>
                    <FieldLabel htmlFor="password">Senha</FieldLabel>
                    <PasswordInput
                        id="password"
                        required
                        showStrength
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Field>

                <Field>
                    <FieldLabel htmlFor="confirm-password">Confirmar Senha</FieldLabel>
                    <PasswordInput
                        id="confirm-password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <FieldDescription>Por favor, digite sua senha novamente.</FieldDescription>
                    {passwordError && (
                        <p className="text-sm text-red-500 mt-1">{passwordError}</p>
                    )}
                </Field>

                <Field>
                    <Button type="submit" disabled={isPending}>
                        {isPending ? "Criando..." : "Criar a conta"}
                    </Button>
                </Field>

                <FieldSeparator>Ou continue com</FieldSeparator>

                <Field>
                    <Button variant="outline" type="button">
                        {/* ícone do Google */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24">
                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.61l6.85-6.85C35.91 2.38 30.36 0 24 0 14.64 0 6.48 5.4 2.44 13.26l7.98 6.19C12.36 13.16 17.71 9.5 24 9.5z" />
                            <path fill="#4285F4" d="M46.5 24.5c0-1.63-.15-3.19-.42-4.7H24v9.02h12.7c-.55 2.96-2.23 5.47-4.75 7.15l7.33 5.7C43.84 37.56 46.5 31.53 46.5 24.5z" />
                            <path fill="#FBBC05" d="M10.42 28.45A14.5 14.5 0 0 1 9.5 24c0-1.55.27-3.04.76-4.45l-7.98-6.19A23.97 23.97 0 0 0 0 24c0 3.87.92 7.52 2.56 10.74l7.86-6.29z" />
                            <path fill="#34A853" d="M24 48c6.36 0 11.71-2.1 15.61-5.73l-7.33-5.7c-2.04 1.37-4.66 2.18-8.28 2.18-6.29 0-11.64-3.66-13.58-8.95l-7.86 6.29C6.48 42.6 14.64 48 24 48z" />
                        </svg>
                        Criar conta com o Google
                    </Button>
                    <FieldDescription className="px-6 text-center">
                        Já tem uma conta? <a href="/sign-in">Entre</a>
                    </FieldDescription>
                </Field>
            </FieldGroup>
        </form>
    );
}