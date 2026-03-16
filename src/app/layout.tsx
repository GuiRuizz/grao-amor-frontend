import { Metadata } from "next";
import '../styles/globals.css'
import { Header } from "../components/header-public";
import { Montserrat, Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Grão de Amor",
  description: "Gerando valor com confiança e fidelidade"
}

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={montserrat.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
