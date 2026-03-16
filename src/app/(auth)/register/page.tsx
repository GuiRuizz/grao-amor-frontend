
import { SignupForm } from "@/src/features/register/components/register-form"
import pinguim from "@/src/images/pinguim.png"
import logo from "@/src/images/logo-simbolo.png"
import Image from "next/image"


export default function RegisterPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">

      {/* IMAGEM */}
      <div className="relative hidden bg-muted lg:block">
        <Image
          src={pinguim}
          alt="Imagem do pinguim"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>

      {/* FORM */}

      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-end">
          <a href="/" className="flex items-center font-medium">
            Grão de Amor
            <div className="flex items-center justify-center rounded-md bg-white text-primary-foreground">
              <Image
                src={logo}
                alt="Logo"
                className="w-[100px] h-[60px]"
              />
            </div>
          </a>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignupForm />
          </div>
        </div>
      </div>


    </div>
  )
}
