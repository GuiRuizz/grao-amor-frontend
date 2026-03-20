import { API_BASE_URL } from "@/src/lib/api";
import { IAuthResponse } from "../../types/auth";
import { authRoutes } from "./routes/auth-routes";
import { RegisterRequestDTO } from "./DTO/authDTO";


export async function registerRequest(data: RegisterRequestDTO): Promise<IAuthResponse> {
    const response = await fetch(`${API_BASE_URL}${authRoutes.register()}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Erro ao registrar o usuário");
    }

    return response.json();
}