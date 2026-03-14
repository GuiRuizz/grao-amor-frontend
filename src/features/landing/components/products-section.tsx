import { ProdutosGridProps } from "@/src/types/IProducts";
import { ShoppingCart } from "lucide-react";

export function ProdutosGrid({ produtos }: ProdutosGridProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {produtos.map((produto) => (
                <div key={produto.id} className="relative rounded-lg shadow-sm overflow-hidden h-80">
                    {/* Tag de destaque */}
                    {produto.destaque && (
                        <span className="absolute top-2 right-2 bg-orange-400 text-white text-xs font-semibold px-2 py-1 rounded z-10">
                            {produto.destaque}
                        </span>
                    )}

                    {/* Imagem ocupa todo o card */}
                    <img
                        src={produto.imagem}
                        alt={produto.nome}
                        className="w-full h-full object-cover"
                    />

                    {/* Conteúdo sobreposto na parte de baixo */}
                    <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 p-4">
                        <h3 className="font-semibold text-gray-900 mb-1">{produto.nome}</h3>
                        <div className="flex items-center mb-2">
                            <span className="text-yellow-400 mr-2">
                                {"★".repeat(Math.floor(produto.estrelas))}
                                {produto.estrelas % 1 !== 0 ? "½" : ""}
                            </span>
                            <span className="text-gray-500 text-sm">({produto.avaliacao})</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-gray-900">R$ {produto.preco.toFixed(2)}</span>
                            <button className="bg-teal-500 p-2 rounded-full text-white hover:bg-teal-600">
                                <ShoppingCart size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}