"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { loginRequest } from "../api/login";
import { parseJwt } from "@/src/services/JWTDecode";

export function useLogin() {
    const router = useRouter();

    return useMutation({
        mutationFn: loginRequest,

        onSuccess: (data) => {
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
        },

        onError: (error) => {
            console.error("Erro no login:", error);
        },
    });
}