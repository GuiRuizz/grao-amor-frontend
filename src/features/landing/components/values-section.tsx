import { ValueCard } from "./card-section";
import { Award, Package, HeartPulse } from "lucide-react";


export function ValuesSection() {
    return (
        <section className="bg-green-100 py-20">
            <div className="max-w-6xl mx-auto text-center">

                <h2 className="text-3xl font-bold mb-2">
                    Por que escolher a Grão de Amor?
                </h2>

                <p className="text-gray-500 mb-10">
                    Qualidade, confiança e praticidade para garantir que seu melhor amigo tenha sempre a melhor alimentação. Além disso, nossos clientes participam de sorteios semanais e recebem brindes especiais para deixar cada entrega ainda mais feliz.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    <ValueCard
                        title="Marcas de Confiança"
                        text="Selecionamos apenas rações das marcas mais confiáveis do mercado, garantindo qualidade e segurança para o seu pet."
                        icon={Award}
                        colorIcon="bg-green-100 text-green-600"
                        colorBackground="bg-green-100"

                    />

                    <ValueCard
                        title="Nutrição de Qualidade"
                        text="Produtos balanceados e recomendados por especialistas para manter seu pet saudável e cheio de energia."
                        icon={HeartPulse}
                        colorIcon="bg-pink-100 text-pink-600"
                        colorBackground="bg-pink-100"
                    />

                    <ValueCard
                        title="Entrega e Assinatura Fácil"
                        text="Receba a ração do seu pet em casa ou assine um plano para nunca mais esquecer de repor o alimento."
                        icon={Package}
                        colorIcon="bg-blue-100 text-blue-600"
                        colorBackground="bg-blue-100"
                    />
                </div>

            </div>
        </section>
    );
}