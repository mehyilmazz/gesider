import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kariyer",
  description: "GESİDER kariyer fırsatları ve iş başvurusu.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
