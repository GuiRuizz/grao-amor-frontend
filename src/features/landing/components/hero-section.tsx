import Image from "next/image";
import dog from "../../../images/dog.png";

export function HeroSection() {
    return (
        <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center py-20">

            <div className="space-y-6">
                <span className="text-sm bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
                    NOVIDADE: PLANOS PERSONALIZADOS
                </span>

                <h1 className="text-5xl font-bold leading-tight">
                    Nutrição com <span className="text-teal-600">carinho</span> para o
                    seu melhor amigo
                </h1>

                <p className="text-gray-600">
                    Grão de Amor: Alimentos selecionados com amor, cuidado e saúde
                    para uma vida longa ao lado de quem você ama.
                </p>

                <div className="flex gap-4">
                    <button className="bg-teal-600 text-white px-6 py-3 rounded-full">
                        Assine Agora
                    </button>

                    <button className="border px-6 py-3 rounded-full">
                        Ver Produtos
                    </button>
                </div>
            </div>

            <div className="relative w-full h-[350px]">
                <Image
                    src={dog}
                    alt="Cachorro feliz"
                    fill
                    className="rounded-3xl object-cover"
                />
            </div>
        </section>
    );
}