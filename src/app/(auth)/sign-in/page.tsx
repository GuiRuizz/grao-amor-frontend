import { LoginForm } from "@/src/features/auth/components/login-form"
import cat from "@/src/images/cat.png"
import logo from "@/src/images/logo-simbolo.png"
import Image from "next/image"


export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="/" className="flex items-center font-medium">
            <div className="flex items-center justify-center rounded-md bg-white text-primary-foreground">
              <Image
                src={logo}
                alt="Image"
                className="w-[100px] h-[60px]"
              />
            </div>
            Grão de Amor.
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image
          src={cat}
          alt="Imagem do gato o lado direito"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
