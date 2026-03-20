"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { registerRequest } from "../api/regiter";
import { toast } from "react-toastify";


export function useRegister() {
    const router = useRouter();

    return useMutation({
        mutationFn: registerRequest,

        onSuccess: (user) => {
            // Aqui o response é só o usuário
            toast.success('Usuário criado com sucesso', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            // Redireciona para login
            router.push("/sign-in");
        },

        onError: (error) => {
            toast.error('Ocorreu um erro ao criar o usuário!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            console.error("Erro no registro:", error);
        },
    });
}