import { Card } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";

export function CTASubscriptionSection() {
    return (
        <section className="bg-white py-20 px-6">
            <div className="flex justify-center">
                <Card className="relative max-w-4xl h-[438px] w-full rounded-[40px] bg-[#5F8F94] px-12 py-16 text-center text-white overflow-hidden">

                    {/* círculos decorativos */}
                    <div className="absolute -top-30 -right-20 w-64 h-64 bg-white/10 rounded-full"></div>
                    <div className="absolute -bottom-30 -left-20 w-64 h-64 bg-white/10 rounded-full"></div>

                    <h2 className="text-4xl font-bold mb-4">
                        Pronto para transformar a vida do seu pet?
                    </h2>

                    <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
                        Junte-se a milhares de tutores que já escolheram as melhores marcas premium de nutrição para seus pets. Aproveite 15% de desconto na primeira entrega da assinatura.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">


                        <Button className="bg-white text-[#5F8F94] hover:bg-gray-100 px-6 py-6 rounded-xl text-base font-semibold shadow-md hover:shadow-lg transition-shadow">
                            Quero Assinar Agora
                        </Button>

                        <Button
                            variant="outline"
                            className="bg-[#5F8F94] text-white hover:bg-white/10 px-6 py-6 rounded-xl text-base shadow-md hover:shadow-lg transition-shadow"
                        >
                            Entrar em Contato
                        </Button>
                    </div>

                </Card>
            </div>
        </section>
    );
}