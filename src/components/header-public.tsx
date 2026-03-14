"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../images/logo-escrita.png";
import { usePathname } from "next/navigation";



export function Header() {
    const pathname = usePathname();

    const hideAuthButtons =
        pathname === "/sign-in" || pathname === "/register";
    return (
        <header className="bg-white w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/5">
            <div className="container flex items-center justify-between py-4">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative w-[200px] h-[60px]">
                        <Image
                            src={logo}
                            alt="Grão de Amor"
                            fill
                            className="h-96 w-full rounded-lg object-cover object-center"
                        />
                    </div>
                </Link>

                {/* Navegação */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <Link href="/">Home</Link>
                    <Link href="/products">Produtos</Link>
                    <Link href="/pricing">Planos</Link>
                    <Link href="/about">Sobre</Link>
                </nav>

                {/* Botões */}
                {!hideAuthButtons && (
                    <div className="flex items-center gap-3">
                        <Link
                            href="/sign-in"
                            className="px-4 py-2 text-sm font-medium border rounded-full hover:bg-gray-50 transition"
                        >
                            Entrar
                        </Link>

                        <Link
                            href="/register"
                            className="px-5 py-2 text-sm font-medium bg-teal-600 text-white rounded-full hover:bg-teal-700 transition"
                        >
                            Criar conta
                        </Link>
                    </div>
                )}

            </div>
        </header>
    );
}