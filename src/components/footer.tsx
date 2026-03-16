import { Separator } from "@/src/components/ui/separator"
import { Mail, Phone, Clock, Share2, Globe } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-600">
            <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Logo + descrição */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-teal-900 rounded flex items-center justify-center text-white text-xs font-bold">
                            GA
                        </div>

                        <span className="font-semibold text-gray-800 text-lg">
                            Grão de Amor
                        </span>
                    </div>

                    <p className="text-sm leading-relaxed mb-4">
                        Nutrição animal com base científica e muito amor.
                        Entregamos felicidade em forma de grão.
                    </p>

                    <div className="flex gap-4">
                        <Share2 size={18} />
                        <Globe size={18} />
                        <Mail size={18} />
                    </div>
                </div>

                {/* Links rápidos */}
                <div>
                    <h4 className="font-semibold text-gray-800 mb-4">
                        LINKS RÁPIDOS
                    </h4>

                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-gray-900 cursor-pointer">Produtos</li>
                        <li className="hover:text-gray-900 cursor-pointer">Assinatura</li>
                        <li className="hover:text-gray-900 cursor-pointer">Minha Conta</li>
                        <li className="hover:text-gray-900 cursor-pointer">Rastrear Pedido</li>
                    </ul>
                </div>

                {/* Sobre */}
                <div>
                    <h4 className="font-semibold text-gray-800 mb-4">
                        SOBRE NÓS
                    </h4>

                    <ul className="space-y-2 text-sm">
                        <li>Nossa História</li>
                        <li>Valores & Missão</li>
                        <li>Sustentabilidade</li>
                        <li>Blog Pet</li>
                    </ul>
                </div>

                {/* Atendimento */}
                <div>
                    <h4 className="font-semibold text-gray-800 mb-4">
                        ATENDIMENTO
                    </h4>

                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2">
                            <Phone size={16} /> (11) 99999-9999
                        </li>

                        <li className="flex items-center gap-2">
                            <Mail size={16} /> oi@graodeamor.com.br
                        </li>

                        <li className="flex items-center gap-2">
                            <Clock size={16} /> Seg-Sex: 09h – 18h
                        </li>
                    </ul>
                </div>
            </div>

            <Separator />

            <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
                <p>
                    © 2024 Grão de Amor Nutrição Animal LTDA. Todos os direitos reservados.
                </p>

                <div className="flex gap-6">
                    <span>Privacidade</span>
                    <span>Termos de Uso</span>
                    <span>Cookies</span>
                </div>
            </div>
        </footer>
    )
}