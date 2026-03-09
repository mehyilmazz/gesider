import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haberler & Etkinlikler",
  description: "GESİDER haberleri, duyuruları ve sektörel etkinlikler.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
