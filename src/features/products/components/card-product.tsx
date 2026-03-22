// components/ProductCard.tsx
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Plus, RefreshCcw } from "lucide-react";
import { FC } from "react";

interface ProductCardProps {
    title: string;
    category: string;
    subcategory: string;
    weight: string;
    price: number;
    oldPrice?: number;
    rating: number;
    imageUrl: string;
    badgeText?: string;
}

const ProductCard: FC<ProductCardProps> = ({
    title,
    category,
    subcategory,
    weight,
    price,
    oldPrice,
    rating,
    imageUrl,
    badgeText,
}) => {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden w-64">
            {/* Badge */}
            {badgeText && (
                <div className="absolute mt-4 ml-4">
                    <Badge className="bg-teal-500 text-white">{badgeText}</Badge>
                </div>
            )}

            {/* Image */}
            <div className="h-40 bg-gray-100 flex items-center justify-center">
                <img
                    src={imageUrl}
                    alt={title}
                    className="h-full object-contain"
                />
            </div>

            {/* Content */}
            <div className="p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-gray-900 text-lg">{title}</h2>
                    <span className="text-yellow-500 font-semibold">{rating} ★</span>
                </div>
                <p className="text-sm text-gray-500">
                    {category} • {subcategory} • {weight}
                </p>

                {/* Prices */}
                <div className="mt-2 flex items-center gap-2">
                    <span className="text-lg font-bold text-teal-700">${price.toFixed(2)}</span>
                    {oldPrice && (
                        <span className="text-sm text-gray-400 line-through">${oldPrice.toFixed(2)}</span>
                    )}
                </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex gap-2 p-4">
                <Button className="flex-1 bg-[#548D96] hover:bg-teal-700 text-white">
                    <Plus /> Add
                </Button>
                <Button className="flex-1 border border-gray-200 text-gray-700 bg-[#EDF3F4] hover:bg-gray-300">
                  <RefreshCcw /> Plano
                </Button>
            </div>
        </div>
    );
};

export default ProductCard;