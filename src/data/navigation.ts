export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { label: "Ana Sayfa", href: "/" },
  {
    label: "Hakkımızda",
    href: "/hakkimizda",
    children: [
      { label: "Tarihçe & Misyon", href: "/hakkimizda#tarihce" },
      { label: "Başkanın Mesajı", href: "/hakkimizda#baskan" },
      { label: "Yönetim Kurulu", href: "/hakkimizda#yonetim" },
      { label: "Tüzük & Raporlar", href: "/hakkimizda#tuzuk" },
    ],
  },
  { label: "Üyelik", href: "/uyelik" },
  { label: "Komisyonlar", href: "/komisyonlar" },
  { label: "Haberler", href: "/haberler" },
  { label: "Kaynaklar", href: "/kaynaklar" },
  { label: "Kariyer", href: "/kariyer" },
  { label: "İletişim", href: "/iletisim" },
];
