export interface Commission {
  id: string;
  name: string;
  icon: string;
  description: string;
  duties: string[];
}

export const commissions: Commission[] = [
  {
    id: "arge",
    name: "Ar-Ge Komisyonu",
    icon: "FlaskConical",
    description:
      "Güvenlik sektöründe araştırma ve geliştirme faaliyetlerini yürütmek, yeni teknolojileri takip etmek ve sektöre yön vermek amacıyla çalışmalar yürütmektedir.",
    duties: [
      "Güvenlik teknolojilerindeki yenilikleri takip etmek",
      "Üye firmalar arasında Ar-Ge iş birliğini teşvik etmek",
      "Sektörel Ar-Ge raporları hazırlamak",
      "Üniversite-sanayi iş birliği projelerini koordine etmek",
    ],
  },
  {
    id: "fuar",
    name: "Fuar-Organizasyon Komisyonu",
    icon: "CalendarDays",
    description:
      "Ulusal ve uluslararası fuar organizasyonlarını planlamak, sektörel etkinlikler düzenlemek ve üyelerin fuar katılımlarını koordine etmektedir.",
    duties: [
      "Yurt içi ve yurt dışı fuar katılımlarını organize etmek",
      "Sektörel toplantı ve seminerler düzenlemek",
      "Üyeler arası networking etkinlikleri planlamak",
      "Fuar sonrası değerlendirme raporları hazırlamak",
    ],
  },
  {
    id: "alarm",
    name: "Alarm ve Gözlem Komisyonu",
    icon: "Bell",
    description:
      "Alarm sistemleri ve gözetleme teknolojileri alanında standartların belirlenmesi, sektörel sorunların çözümü ve düzenleyici kurumlarla iletişim konularında çalışmaktadır.",
    duties: [
      "Alarm haber alma merkezleri standartlarını belirlemek",
      "Gözetleme sistemleri teknik kriterlerini oluşturmak",
      "İlgili kamu kurumlarıyla koordinasyon sağlamak",
      "Sektörel sorunlara çözüm önerileri geliştirmek",
    ],
  },
  {
    id: "dis-iliskiler",
    name: "Dış İlişkiler Komisyonu",
    icon: "Globe",
    description:
      "Uluslararası güvenlik kuruluşları ile ilişkileri yürütmek, yurt dışı iş birliklerini geliştirmek ve teknoloji transferi konularında çalışmalar yapmaktadır.",
    duties: [
      "Uluslararası güvenlik dernekleri ile ilişki kurmak",
      "Yurt dışı fuar ve kongrelere katılım sağlamak",
      "Teknoloji transferi fırsatlarını değerlendirmek",
      "İhracat ve ithalat konularında üyelere destek olmak",
    ],
  },
  {
    id: "basin",
    name: "Basın ve Halkla İlişkiler Komisyonu",
    icon: "Newspaper",
    description:
      "Derneğin ve sektörün kamuoyundaki görünürlüğünü artırmak, medya ilişkilerini yönetmek ve halkla ilişkiler faaliyetlerini koordine etmektedir.",
    duties: [
      "Basın bültenleri hazırlamak ve dağıtmak",
      "Medya kuruluşları ile ilişkileri yönetmek",
      "Dernek web sitesi ve sosyal medyayı yönetmek",
      "Sektörel yayınlar için içerik üretmek",
    ],
  },
  {
    id: "egitim",
    name: "Eğitim ve Teknik İşler Komisyonu",
    icon: "GraduationCap",
    description:
      "Sektör çalışanlarının eğitimi, teknik standartların belirlenmesi ve mesleki gelişim konularında çalışmalar yürütmektedir.",
    duties: [
      "Sektörel eğitim programları düzenlemek",
      "Teknik standartları belirlemek ve güncellemek",
      "Sertifikasyon süreçlerini yönetmek",
      "Mesleki yeterlilik kriterlerini oluşturmak",
    ],
  },
  {
    id: "uyelik",
    name: "Üyelik Komisyonu",
    icon: "Users",
    description:
      "Dernek üyelik süreçlerini yönetmek, yeni üye kazanımı için stratejiler geliştirmek ve mevcut üyelerin memnuniyetini artırmak amacıyla çalışmaktadır.",
    duties: [
      "Üyelik başvurularını değerlendirmek",
      "Yeni üye kazanımı stratejileri geliştirmek",
      "Üye memnuniyet anketleri düzenlemek",
      "Üye iletişim ve koordinasyonunu sağlamak",
    ],
  },
  {
    id: "mevzuat",
    name: "Mevzuat İle İlgili İşler Komisyonu",
    icon: "Scale",
    description:
      "Güvenlik sektörünü ilgilendiren yasal düzenlemeleri takip etmek, mevzuat değişikliklerini analiz etmek ve üyeleri bilgilendirmek konularında çalışmaktadır.",
    duties: [
      "Güvenlik sektörü mevzuatını takip etmek",
      "Yeni düzenlemeleri analiz etmek ve üyeleri bilgilendirmek",
      "Kamu kurumlarına mevzuat önerileri sunmak",
      "Hukuki danışmanlık hizmeti koordinasyonu sağlamak",
    ],
  },
];
