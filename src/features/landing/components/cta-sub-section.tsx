import { ValueCard } from "./card-section";
import { ClipboardList, Cat, Truck } from "lucide-react";


export function CTASubscriptionSection() {
    return (
        <section className="bg-white py-20">
            <div className="max-w-6xl mx-auto text-center">

                <h2 className="text-3xl font-bold mb-2">
                    Assinatura Grão de Amor
                </h2>

                <p className="text-gray-500 mb-10">
                    Nunca mais esqueça de comprar ração. Receba automaticamente em casa e ainda aproveite benefícios exclusivos para o seu pet.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    <ValueCard
                        title="Escolha o plano ideal"
                        text="Defina a frequência de entrega e a ração ideal para o seu pet. Nós cuidamos do resto."
                        icon={ClipboardList}
                        colorIcon="bg-blue-100 text-blue-600"
                        centerIcon
                        colorBackground="bg-blue-100"
                    />

                    <ValueCard
                        title="Receba em casa"
                        text="Entrega programada para você nunca mais se preocupar em comprar ração de última hora."
                        icon={Truck}
                        colorIcon="bg-blue-100 text-blue-600"
                        centerIcon
                        colorBackground="bg-blue-100"
                    />

                    <ValueCard
                        title="Benefícios exclusivos"
                        text="Assinantes participam de sorteios semanais e recebem brindes especiais para deixar cada entrega ainda mais feliz."
                        icon={Cat}
                        colorIcon="bg-blue-100 text-blue-600"
                        centerIcon
                        colorBackground="bg-blue-100"
                    />
                </div>

            </div>
        </section>
    );
}