import { Metadata } from "next";
import '../styles/globals.css'
import { Montserrat, Geist } from "next/font/google";
import { cn } from "@/src/lib/utils";
import { AuthProvider } from "../features/auth/providers/auth-provider";
import { ReactQueryProvider } from "../providers/react-query-provider";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "Grão de Amor",
  description: "Gerando valor com confiança e fidelidade",
}

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={montserrat.className}>
        <ReactQueryProvider>
          <AuthProvider>
            {children}
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
