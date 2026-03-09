export interface Resource {
  id: string;
  title: string;
  description: string;
  category: "teknik" | "makale" | "bilgi";
  downloadUrl?: string;
}

export const resources: Resource[] = [
  {
    id: "1",
    title: "SPY Kablosuz Alarm Kullanım Kılavuzu",
    description: "SPY marka kablosuz alarm sistemleri için detaylı kullanım kılavuzu.",
    category: "teknik",
    downloadUrl: "#",
  },
  {
    id: "2",
    title: "Paradox SP-MG Serileri Kısa Kullanım Kılavuzu",
    description: "Paradox SP ve MG serisi alarm panelleri için hızlı başlangıç rehberi.",
    category: "teknik",
    downloadUrl: "#",
  },
  {
    id: "3",
    title: "Crow PW 4-8 Kullanıcı Kılavuzu",
    description: "Crow PW 4-8 alarm paneli kullanıcı kılavuzu.",
    category: "teknik",
    downloadUrl: "#",
  },
  {
    id: "4",
    title: "Savesa SA 88 Program Kullanım Kılavuzu",
    description: "Savesa SA 88 alarm paneli programlama ve kullanım rehberi.",
    category: "teknik",
    downloadUrl: "#",
  },
  {
    id: "5",
    title: "GE Alarm Kullanma Kılavuzu",
    description: "GE (Caddx NX-8) alarm sistemi kullanım kılavuzu.",
    category: "teknik",
    downloadUrl: "#",
  },
  {
    id: "6",
    title: "DSC Alarm Kullanma Kılavuzu",
    description: "DSC marka alarm sistemleri için kullanıcı rehberi.",
    category: "teknik",
    downloadUrl: "#",
  },
  {
    id: "7",
    title: "CCTV Kapalı Devre Kamera Sistemleri",
    description:
      "CCTV kapalı devre kamera sistemleri hakkında kapsamlı teknik bilgi ve terimler sözlüğü.",
    category: "bilgi",
  },
  {
    id: "8",
    title: "Alarm Sistemleri İle İlgili Bilgiler",
    description:
      "Alarm haber alma merkezlerinin kuruluş ve çalışmaları ile ilgili mevzuat bilgileri.",
    category: "bilgi",
  },
  {
    id: "9",
    title: "Biyometrik Okumalar İle İlgili Bilgiler",
    description:
      "Biyometrik tanıma sistemleri ve teknolojileri hakkında genel bilgiler.",
    category: "bilgi",
  },
  {
    id: "10",
    title: "CE İşareti Nedir?",
    description:
      'CE işareti (Conformité Européenné) ve Avrupa Birliği uygunluk kriterleri hakkında bilgilendirme.',
    category: "bilgi",
  },
  {
    id: "11",
    title: "Konut Güvenliği İçin Tedbirler",
    description:
      "Konutlarda güvenlik önlemleri, mekanik ve elektronik güvenlik sistemleri hakkında makale.",
    category: "makale",
  },
  {
    id: "12",
    title: "Alarm Terimleri Sözlüğü",
    description:
      "Alarm sistemleri ile ilgili teknik terimlerin açıklamalı sözlüğü.",
    category: "makale",
  },
  {
    id: "13",
    title: "Neden Güvenlik?",
    description:
      "Artan suç oranları karşısında güvenlik sistemlerinin önemi hakkında bilgilendirici makale.",
    category: "makale",
  },
];
