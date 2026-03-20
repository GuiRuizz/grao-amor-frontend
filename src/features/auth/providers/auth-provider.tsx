"use client";

import { API_BASE_URL } from "@/src/lib/api";
import { setAccessToken } from "@/src/lib/api-client";
import { useEffect } from "react";
import { authRoutes } from "../api/routes/auth-routes";

export function AuthProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        async function init() {
            try {
                const res = await fetch(`${API_BASE_URL}${authRoutes.refreshToken()}`, {
                    method: "POST",
                    credentials: "include",
                });

                if (!res.ok) return;

                const data = await res.json();
                setAccessToken(data.accessToken);
            } catch { }
        }

        init();
    }, []);

    return <>{children}</>;
}