import { Footer } from "@/src/components/footer";
import { HeaderPublic } from "@/src/components/header-public";


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
