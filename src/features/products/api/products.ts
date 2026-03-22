import { API_BASE_URL } from "@/src/lib/api";
import { productsRoutes } from "./routes/products_routes";
import { ApiProduct } from "@/src/types/products";

export async function fetchProducts(): Promise<ApiProduct[]> {
    const res = await fetch(`${API_BASE_URL}${productsRoutes.getAllProducts()}`);

    if (!res.ok) {
        throw new Error("Erro ao buscar produtos");
    }

    return res.json();
}