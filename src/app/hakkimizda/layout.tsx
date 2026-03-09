import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "GESİDER'in tarihçesi, misyonu, vizyonu, yönetim kurulu ve tüzüğü hakkında bilgi edinin.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
