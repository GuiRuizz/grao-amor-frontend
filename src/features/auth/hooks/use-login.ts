"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { loginRequest } from "../api/login";
import { parseJwt } from "@/src/services/JWTDecode";
import { toast } from "react-toastify";
import { API_BASE_URL } from "@/src/lib/api";

export function useLogin() {
    const router = useRouter();

    return useMutation({
        mutationFn: loginRequest,

        onSuccess: async (data) => {
            // ✅ salva o token (pro middleware enxergar)
            document.cookie = `token=${data.accessToken}; path=/`;

            // ✅ decode do JWT
            const payload = parseJwt(data.accessToken);

            // ✅ redirect baseado na role
            if (payload.role === "ADMIN") {
                router.push("/dashboard");
            } else {
                router.push("/");
            }

            const userId = payload.userId;

            const userData = await fetch(`${API_BASE_URL}/users/${userId}`, {
                headers: { Authorization: `Bearer ${data.accessToken}` },
            }).then(res => res.json());

            toast.success(`Seja bem-vindo! ${userData.name}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        },

        onError: (error) => {
            console.error("Erro no login:", error);
        },
    });
}