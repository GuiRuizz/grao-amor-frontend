"use client";

import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardFooter } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import ProductCard from "@/src/features/products/components/card-product";
import { useProducts } from "@/src/features/products/hooks/use-products";

export default function PetFoodPage() {
    const { data: products = [], isLoading, isError } = useProducts();

    // 🔄 Loading state
    if (isLoading) {
        return <p className="p-6">Carregando produtos...</p>;
    }

    // ❌ Error state
    if (isError) {
        return <p className="p-6 text-red-500">Erro ao carregar produtos</p>;
    }

    return (
        <div className="flex gap-6 p-6">
            {/* Sidebar */}
            <aside className="w-64 space-y-6">
                <div>
                    <h3 className="font-semibold mb-2">Filtros</h3>

                    <div className="space-y-2">
                        <p className="text-sm font-medium">Categorias</p>
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">Ração Média</Badge>
                            <Badge variant="outline">Premium</Badge>
                        </div>
                    </div>

                    <Button variant="ghost" className="mt-4 w-full">
                        Limpar Filtros
                    </Button>
                </div>
            </aside>

            {/* Main */}
            <main className="flex-1">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold">Premium Pet Food</h1>
                        <p className="text-muted-foreground text-sm">
                            Aparecendo {products.length} produtos
                        </p>
                    </div>

                    <Input placeholder="Buscar..." className="w-64" />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <ProductCard
                            title={product.title}
                            category={product.category!}
                            subcategory="Small Breeds"
                            weight={product.stock.toString()}
                            price={product.price}
                            oldPrice={54}
                            rating={4.9}
                            imageUrl="/images/adult-chicken.png"
                            badgeText={product.brand}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}