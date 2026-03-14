import { ValueCard } from "./card-section";
import { Award, Package, HeartPulse } from "lucide-react";


export function SubscriptionSection() {
    return (
        <section className="bg-white py-20">
            <div className="max-w-6xl mx-auto text-center">

                <h2 className="text-3xl font-bold mb-2">
                    Assinatura Grão de Amor
                </h2>

                <p className="text-gray-500 mb-10">
                    Praticidade para você, saúde constante para eles.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    <ValueCard
                        title="Escolha o plano"
                        text="Selecione a frequência e o tipo de alimento ideal para o perfil do seu pet."
                        icon={Package}
                        colorIcon="bg-blue-100 text-blue-600"
                        centerIcon={true}
                        colorBackground="bg-blue-100"
                    />

                    <ValueCard
                        title="Receba em casa"
                        text="Entrega rápida, grátis e programada para você nunca mais se preocupar com estoque."
                        icon={Package}
                        colorIcon="bg-blue-100 text-blue-600"
                        centerIcon={true}
                        colorBackground="bg-blue-100"
                    />

                    <ValueCard
                        title="Pet feliz e saudável"
                        text="Aproveite os momentos que importam enquanto nós cuidamos da nutrição."
                        icon={Package}
                        colorIcon="bg-blue-100 text-blue-600"
                        centerIcon={true}
                        colorBackground="bg-blue-100"
                    />
                </div>

            </div>
        </section>
    );
}