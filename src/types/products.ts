// types/product.ts

export type ApiProduct = {
    id: string;
    name: string;
    brand: string;
    pricePerKg: number;
    stockKg: number;
    category?: {
        id: string;
        name: string;
        description: string;
    };
};

export type Product = {
    id: string;
    title: string;
    price: number;
    category?: string;
    brand: string;
    stock: number;
};