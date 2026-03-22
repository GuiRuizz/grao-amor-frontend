import { ApiProduct, Product } from "@/src/types/products";

export function mapProduct(apiProduct: ApiProduct): Product {
    return {
        id: apiProduct.id,
        title: apiProduct.name,
        price: apiProduct.pricePerKg,
        category: apiProduct.category?.name,
        brand: apiProduct.brand,
        stock: apiProduct.stockKg,
    };
}