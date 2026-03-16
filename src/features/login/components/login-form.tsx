import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"form">) {
    return (
        <form className={cn("flex flex-col gap-6", className)} {...props}>
            <FieldGroup>
                <div className="flex flex-col items-center gap-1 text-center">
                    <h1 className="text-2xl font-bold">Entre com a sua conta</h1>
                    <p className="text-sm text-balance text-muted-foreground">
                        Digite o seu e-mail e senha para entraar em nosso sistema
                    </p>
                </div>
                <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input id="email" type="email" placeholder="m@example.com" required />
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
                    <Input id="password" type="password" required />
                </Field>
                <Field>
                    <Button type="submit">Login</Button>
                </Field>
                <FieldSeparator>Ou continue com</FieldSeparator>
                <Field>
                    <Button variant="outline" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24">
                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.61l6.85-6.85C35.91 2.38 30.36 0 24 0 14.64 0 6.48 5.4 2.44 13.26l7.98 6.19C12.36 13.16 17.71 9.5 24 9.5z" />
                            <path fill="#4285F4" d="M46.5 24.5c0-1.63-.15-3.19-.42-4.7H24v9.02h12.7c-.55 2.96-2.23 5.47-4.75 7.15l7.33 5.7C43.84 37.56 46.5 31.53 46.5 24.5z" />
                            <path fill="#FBBC05" d="M10.42 28.45A14.5 14.5 0 0 1 9.5 24c0-1.55.27-3.04.76-4.45l-7.98-6.19A23.97 23.97 0 0 0 0 24c0 3.87.92 7.52 2.56 10.74l7.86-6.29z" />
                            <path fill="#34A853" d="M24 48c6.36 0 11.71-2.1 15.61-5.73l-7.33-5.7c-2.04 1.37-4.66 2.18-8.28 2.18-6.29 0-11.64-3.66-13.58-8.95l-7.86 6.29C6.48 42.6 14.64 48 24 48z" />
                        </svg>
                        Login com o Google
                    </Button>
                    <FieldDescription className="text-center">
                        Não tem uma conta?{" "}
                        <a href="#" className="underline underline-offset-4">
                            Inscreva-se
                        </a>
                    </FieldDescription>
                </Field>
            </FieldGroup>
        </form>
    )
}
