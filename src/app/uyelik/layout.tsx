import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Üyelik",
  description: "GESİDER üye firmalarını görüntüleyin ve online üyelik başvurusu yapın.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
