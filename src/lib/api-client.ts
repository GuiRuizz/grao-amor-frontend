import { authRoutes } from "../features/auth/api/routes/auth-routes";
import { API_BASE_URL } from "./api";

let accessToken: string | null = null;

export function setAccessToken(token: string) {
    accessToken = token;
}

export async function apiClient(
    url: string,
    options: RequestInit = {}
) {
    const response = await fetch(`${API_BASE_URL}${url}`, {
        ...options,
        headers: {
            Authorization: accessToken ? `Bearer ${accessToken}` : "",
            "Content-Type": "application/json",
            ...options.headers,
        },
        credentials: "include", // 🔥 essencial pro cookie
    });

    // 🔥 intercepta 401
    if (response.status === 401) {
        const refreshResponse = await fetch(
            `${API_BASE_URL}${authRoutes.refreshToken}`,
            {
                method: "POST",
                credentials: "include",
            }
        );

        if (!refreshResponse.ok) {
            throw new Error("Não autenticado");
        }

        const data = await refreshResponse.json();

        setAccessToken(data.accessToken);

        // 🔁 repete request original
        return fetch(`${API_BASE_URL}${url}`, {
            ...options,
            headers: {
                Authorization: `Bearer ${data.accessToken}`,
                "Content-Type": "application/json",
                ...options.headers,
            },
            credentials: "include",
        });
    }

    return response;
}