import Link from "next/link";
import { Shield, Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-surface">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-text-primary">
                  GESİDER
                </span>
              </div>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              Kurumsal
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Hakkımızda", href: "/hakkimizda" },
                { label: "Yönetim Kurulu", href: "/hakkimizda#yonetim" },
                { label: "Komisyonlar", href: "/komisyonlar" },
                { label: "Haberler", href: "/haberler" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              Hızlı Erişim
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Üyelik", href: "/uyelik" },
                { label: "Kaynaklar", href: "/kaynaklar" },
                { label: "Kariyer", href: "/kariyer" },
                { label: "İletişim", href: "/iletisim" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              İletişim
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-text-muted">
                  {siteConfig.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-sm text-text-muted hover:text-primary transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-text-muted hover:text-primary transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-muted">
            &copy; 1996-{currentYear} GESİDER - Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-text-muted">
            Güvenlik Endüstrisi Sanayicileri ve İşadamları Derneği
          </p>
        </div>
      </div>
    </footer>
  );
}
