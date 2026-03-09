export interface NavItem {
  label: string;
  href: string;
}

export const navigation: NavItem[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "\u00dcyelerimiz", href: "/uyelik" },
  { label: "Haberler", href: "/haberler" },
  { label: "Hakk\u0131m\u0131zda", href: "/hakkimizda" },
  { label: "\u0130leti\u015fim", href: "/iletisim" },
];
