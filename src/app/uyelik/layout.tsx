import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Üyelerimiz",
  description: "GESİDER üye firmalarını görüntüleyin ve üyelik başvurusu yapın.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
