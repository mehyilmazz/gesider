import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Komisyonlar",
  description: "GESİDER bünyesindeki 8 farklı komisyonun görev ve sorumlulukları.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
