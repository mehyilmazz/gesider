export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { label: "Ana Sayfa", href: "/" },
  {
    label: "Hakk\u0131m\u0131zda",
    href: "/hakkimizda",
    children: [
      { label: "Tarih\u00e7e & Misyon", href: "/hakkimizda#tarihce" },
      { label: "Ba\u015fkan\u0131n Mesaj\u0131", href: "/hakkimizda#baskan" },
      { label: "Y\u00f6netim Kurulu", href: "/hakkimizda#yonetim" },
      { label: "T\u00fcz\u00fck", href: "/hakkimizda#tuzuk" },
    ],
  },
  { label: "\u00dcyelik", href: "/uyelik" },
  { label: "Haberler", href: "/haberler" },
  { label: "\u0130leti\u015fim", href: "/iletisim" },
];