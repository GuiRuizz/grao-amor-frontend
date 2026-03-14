import { ShoppingCart } from "lucide-react";
import { produtosMock } from "@/src/mock/BestSellerMock";
import { ProdutosGrid } from "./products-section";


export function BestSellerSection() {
  return (
    <section className="py-20 bg-green-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Mais Vendidos</h2>
            <p className="text-gray-500">Os favoritos de nossa comunidade pet.</p>
          </div>
          <a href="#" className="text-teal-500 font-medium hover:underline">
            Ver tudo →
          </a>
        </div>

        <ProdutosGrid produtos={produtosMock} />
      </div>
    </section>
  );
}