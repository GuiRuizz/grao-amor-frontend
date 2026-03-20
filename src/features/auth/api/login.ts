import { API_BASE_URL } from "@/src/lib/api";
import { IAuthResponse } from "../../types/auth";
import { authRoutes } from "./routes/auth-routes";


export async function loginRequest(data: {
    email: string;
    password: string;
}): Promise<IAuthResponse> {
    const response = await fetch(`${API_BASE_URL}${authRoutes.signIn()}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Erro ao fazer login");
    }

    return response.json();
}