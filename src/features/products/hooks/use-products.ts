import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/products";
import { mapProduct } from "../api/mappers/product.mapper";
import { ApiProduct, Product } from "@/src/types/products";

export function useProducts() {
    return useQuery<ApiProduct[], Error, Product[]>({
        queryKey: ["products"],
        queryFn: fetchProducts,
        select: (data) => data.map(mapProduct),
    });
}