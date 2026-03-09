import { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description: "GESİDER iletişim bilgileri ve mesaj formu.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
