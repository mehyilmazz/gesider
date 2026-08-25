export interface BoardMember {
  name: string;
  title: string;
  company: string;
  /** Yerel profil fotoğrafı (public/yonetim-kurulu altında) */
  image?: string;
}

export interface BoardPeriod {
  period: string;
  year: string;
  members: BoardMember[];
}

export const currentBoard: BoardPeriod = {
  period: "Mevcut Yönetim Kurulu",
  year: "2023-2025",
  members: [
    {
      name: "Alp SAUL",
      title: "Yönetim Kurulu Başkanı",
      company: "Pronet",
      image: "/yonetim-kurulu/alp-saul.jpg",
    },
    {
      name: "Turgay ŞAHAN",
      title: "Başkan Vekili",
      company: "TAV",
      image: "/yonetim-kurulu/turgay-sahan.jpg",
    },
    {
      name: "Osman YILDIZ",
      title: "Genel Sekreter",
      company: "EDS Elektronik",
      image: "/yonetim-kurulu/osman-yildiz.jpg",
    },
    {
      name: "Gürol TOPCU",
      title: "Sayman",
      company: "Topcu Teknoloji",
      image: "/yonetim-kurulu/gurol-topcu.jpg",
    },
    {
      name: "İsmail UZELLİ",
      title: "Yönetim Kurulu Üyesi",
      company: "Securitas",
      image: "/yonetim-kurulu/ismail-uzelli.jpg",
    },
  ],
};

export const boardHistory: BoardPeriod[] = [
  {
    period: "10. Dönem",
    year: "2015-2017",
    members: [
      { name: "Ekrem ÖZKARA", title: "Başkan", company: "" },
      { name: "Atilla ÖZHİM", title: "Başkan Vekili", company: "" },
      { name: "Gürol TOPÇU", title: "Sayman", company: "" },
      { name: "Erdal GÖKŞEN", title: "Genel Sekreter", company: "" },
    ],
  },
  {
    period: "9. Dönem",
    year: "2013-2015",
    members: [
      { name: "Alp SAUL", title: "Başkan", company: "" },
      { name: "Bülent ÇOBANOĞLU", title: "Başkan Vekili", company: "" },
      { name: "Atilla ÖZHİM", title: "Genel Sekreter", company: "" },
      {
        name: "Alp Memduh KARAMANOĞLU",
        title: "Sayman",
        company: "",
      },
    ],
  },
  {
    period: "7-8. Dönem",
    year: "2009-2013",
    members: [
      { name: "Alp SAUL", title: "Başkan", company: "" },
      { name: "İsmail UZELLİ", title: "Başkan Vekili", company: "" },
      { name: "Bülent ÇOBANOĞLU", title: "Genel Sekreter", company: "" },
      { name: "Ekrem ÖZKARA", title: "Sayman", company: "" },
    ],
  },
  {
    period: "5-6. Dönem",
    year: "2005-2009",
    members: [
      { name: "İsmail UZELLİ", title: "Başkan", company: "" },
      { name: "Osman YILDIZ", title: "Başkan Vekili", company: "" },
      { name: "Ufuk ÖZBEN", title: "Genel Sekreter", company: "" },
    ],
  },
  {
    period: "4. Dönem",
    year: "2003-2005",
    members: [
      { name: "Kemal OLPAK", title: "Başkan", company: "" },
      { name: "Erol YILMAZ", title: "Başkan Vekili", company: "" },
      { name: "Ufuk ÖZBEN", title: "Genel Sekreter", company: "" },
    ],
  },
  {
    period: "Kurucu Yönetim",
    year: "1997",
    members: [
      { name: "Erol YILMAZ", title: "Başkan", company: "" },
      { name: "Orhan AKSEL", title: "Başkan Vekili", company: "" },
      { name: "Süleyman BULAK", title: "Genel Sekreter", company: "" },
    ],
  },
];
