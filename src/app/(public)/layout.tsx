import { HeaderPublic } from "@/src/components/header-public";
import { Footer } from "react-day-picker";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <HeaderPublic />
      {children}
      <Footer />

    </div>

  );
}
