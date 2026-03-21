import { IAuthResponse } from "../../types/auth";
import { authRoutes } from "./routes/auth-routes";
import { LoginRequestDTO } from "./DTO/authDTO";
import { API_BASE_URL } from "@/src/lib/api";


export async function loginRequest(data: LoginRequestDTO): Promise<IAuthResponse> {
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