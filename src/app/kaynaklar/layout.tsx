import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kaynaklar",
  description: "Güvenlik sektörüne ait teknik dokümanlar, makaleler ve faydalı bilgiler.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
