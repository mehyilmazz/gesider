import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-surface">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link href="/" className="inline-flex">
              <div className="rounded-xl bg-white/95 px-3 py-2 ring-1 ring-white/40 shadow-sm">
                <Image
                  src="/gesider-logo.png"
                  alt="GESIDER"
                  width={338}
                  height={82}
                  className="h-9 w-auto"
                />
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
                { label: "Hakk\u0131m\u0131zda", href: "/hakkimizda" },
                { label: "Y\u00f6netim Kurulu", href: "/hakkimizda" },
                { label: "Haberler", href: "/haberler" },
              ].map((link) => (
                <li key={`${link.label}-${link.href}`}>
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
              {"H\u0131zl\u0131 Eri\u015fim"}
            </h3>
            <ul className="space-y-3">
              {[
                { label: "\u00dcyelerimiz", href: "/uyelik" },
                { label: "Hakk\u0131m\u0131zda", href: "/hakkimizda" },
                { label: "\u0130leti\u015fim", href: "/iletisim" },
              ].map((link) => (
                <li key={`${link.label}-${link.href}`}>
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
              {"\u0130leti\u015fim"}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-text-muted">{siteConfig.address}</span>
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
            {`\u00a9 1996-${currentYear} GESIDER - T\u00fcm haklar\u0131 sakl\u0131d\u0131r.`}
          </p>
          <p className="text-xs text-text-muted">
            {"G\u00fcvenlik End\u00fcstrisi Sanayicileri ve \u0130\u015fadamlar\u0131 Derne\u011fi"}
          </p>
        </div>
      </div>
    </footer>
  );
}
