export interface BoardMember {
  name: string;
  title: string;
  company: string;
  /** İnternetten bulunan profil fotoğrafı URL'si */
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
      image: "https://scaleup.endeavor.org.tr/wp-content/uploads/2023/04/alp-saul-470x470.jpeg",
    },
    {
      name: "Turgay ŞAHAN",
      title: "Başkan Vekili",
      company: "TAV",
      image: "https://media.licdn.com/dms/image/v2/C4D03AQHOxwljqjfBSw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1629902602281?e=1774483200&v=beta&t=C2gsDaU6SCIhDRX70-6zLaugEgCdgQ2fTR6JgwIBxFw",
    },
    {
      name: "Osman YILDIZ",
      title: "Genel Sekreter",
      company: "EDS Elektronik",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQF9ykC5qTGMIg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727451583503?e=1774483200&v=beta&t=bCb2n3uLOiXF05JX0dqH1lDLRiWqfvyj8S9xfR9bgDM",
    },
    {
      name: "Gürol TOPCU",
      title: "Sayman",
      company: "Topcu Teknoloji",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQGCol3YFRuxCA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1685216995963?e=1774483200&v=beta&t=FCOcN7RRVmLbMK7iZ8G5UhD8GIIW5l2jrQkScoAM5gk",
    },
    {
      name: "İsmail UZELLİ",
      title: "Yönetim Kurulu Üyesi",
      company: "Securitas",
      image: "https://media.licdn.com/dms/image/v2/C5103AQEzOeavSLZ7qw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516288630826?e=1774483200&v=beta&t=RB4g6jJWYLjY6OChKHhbH03wLKKDW5iG9hOqeGonM_Q",
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
