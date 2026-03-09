import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/shared/ScrollToTop";

export const metadata: Metadata = {
  title: {
    default: "GESİDER - Güvenlik Endüstrisi Sanayicileri ve İşadamları Derneği",
    template: "%s | GESİDER",
  },
  description:
    "Türkiye'nin önde gelen güvenlik endüstrisi sanayicileri ve işadamları derneği. 1996'dan bu yana sektörün gelişimine katkıda bulunuyoruz.",
  keywords: [
    "GESİDER",
    "güvenlik",
    "güvenlik endüstrisi",
    "güvenlik derneği",
    "CCTV",
    "alarm sistemleri",
    "güvenlik teknolojileri",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="dark">
      <body className="min-h-screen bg-background text-text-primary antialiased">
        <div className="grain" />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
