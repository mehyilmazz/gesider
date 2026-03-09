export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: "duyuru" | "haber" | "etkinlik" | "basin";
}

export const news: NewsItem[] = [
  {
    id: "1",
    slug: "15-olagan-genel-kurul-gorev-dagilimi",
    title: "15. Olağan Genel Kurul Görev Dağılımı",
    excerpt:
      "Derneğimizin 15. Olağan Genel Kurul Toplantısı başarıyla gerçekleştirilmiştir.",
    content:
      "Değerli Üyelerimiz, Derneğimizin 15. Olağan Genel Kurul Toplantısı başarıyla gerçekleştirilmiş olup görev dağılımı yapılmıştır. Yeni dönemde sektörümüzün gelişimi için birlikte çalışmaya devam edeceğiz.",
    date: "2025-09-23",
    category: "duyuru",
  },
  {
    id: "2",
    slug: "15-nci-olagan-genel-kurul-toplantisi",
    title: "15. Olağan Genel Kurul Toplantısı",
    excerpt:
      "Derneğimizin 15. Olağan Genel Kurul Toplantısı hakkında bilgilendirme.",
    content:
      "Değerli Üyelerimiz; Derneğimizin 15. Olağan Genel Kurul Toplantısı başarıyla tamamlanmıştır. Toplantıda sektörün geleceğine dair önemli kararlar alınmıştır.",
    date: "2025-09-15",
    category: "duyuru",
  },
  {
    id: "3",
    slug: "14-olagan-genel-kurul-gorev-dagilimi",
    title: "14. Olağan Genel Kurul Görev Dağılımı",
    excerpt:
      "Derneğimizin 14. Olağan Genel Kurul Toplantısı 27/09/2023 tarihinde gerçekleştirilmiştir.",
    content:
      "Değerli Üyelerimiz; Derneğimizin 14. Olağan Genel Kurul Toplantısı 27/09/2023 tarihinde başarıyla gerçekleştirilmiş olup yeni dönem görev dağılımı yapılmıştır.",
    date: "2023-09-27",
    category: "duyuru",
  },
  {
    id: "4",
    slug: "dijital-donusum-projeleri-tanitim-toplantisi",
    title: "Özel Güvenlik Denetleme Başkanlığı Dijital Dönüşüm Projeleri",
    excerpt:
      'Özel Güvenlik Denetleme Başkanlığı "Dijital Dönüşüm Projeleri Tanıtım Toplantısı" gerçekleştirildi.',
    content:
      'Özel Güvenlik Denetleme Başkanlığı "Dijital Dönüşüm Projeleri Tanıtım Toplantısı" gerçekleştirildi. Toplantıda güvenlik sektöründeki dijital dönüşüm adımları değerlendirildi.',
    date: "2022-03-15",
    category: "haber",
  },
  {
    id: "5",
    slug: "ithalat-islemleri-hakkinda-duyuru",
    title: "İthalat İşlemleri Hakkında Duyuru",
    excerpt:
      "İthalat işlemleri sırasında özellikle Anadolu yakasındaki gümrüklerde yaşanan sorunlar hakkında bilgilendirme.",
    content:
      "Değerli üyelerimiz, İthalat işlemleri sırasında özellikle Anadolu yakasındaki gümrüklerde yaşanan sorunlar hakkında üyelerimizi bilgilendirmek istiyoruz.",
    date: "2021-06-10",
    category: "duyuru",
  },
  {
    id: "6",
    slug: "6-mart-sektorel-sohbet-kahvaltisi",
    title: "6 Mart Sektörel Sohbet Kahvaltısı",
    excerpt:
      "GESİDER yönetimi organize ettiği sektörel sohbet kahvaltısında sektör temsilcilerini bir araya getirdi.",
    content:
      "GESİDER - Güvenlik Endüstrisi Sanayicileri ve İşadamları Derneği yönetimi organize ettiği sektörel sohbet kahvaltısında sektör temsilcilerini bir araya getirdi. Toplantıda sektörün güncel sorunları ve çözüm önerileri tartışıldı.",
    date: "2019-03-06",
    category: "etkinlik",
  },
  {
    id: "7",
    slug: "gesider-kahvalti-ve-istisare-toplantisi",
    title: "GESİDER Kahvaltı ve İstişare Toplantısında Bir Araya Geldi!",
    excerpt:
      "GESİDER kahvaltı ve istişare toplantısında sektör paydaşlarını bir araya getirdi.",
    content:
      "GESİDER - Güvenlik Endüstrisi Sanayicileri ve İşadamları Derneği kahvaltı ve istişare toplantısında sektör paydaşlarını bir araya getirdi. Toplantıda sektörün geleceğine dair önemli görüşmeler yapıldı.",
    date: "2018-11-20",
    category: "etkinlik",
  },
  {
    id: "8",
    slug: "borsa-istanbulda-gong-senkron-guvenlik-icin-caldi",
    title: "Borsa İstanbul'da Gong Senkron Güvenlik için çaldı",
    excerpt:
      "Ulusal ve uluslararası kuruluşlara elektronik güvenlik sistemleri çözümleri sunan Senkron Güvenlik için Borsa İstanbul'da gong çaldı.",
    content:
      "Ulusal ve uluslararası kuruluşlara elektronik güvenlik sistemleri çözümleri sunan Senkron Güvenlik için Borsa İstanbul'da gong çaldı. Güvenlik sektörünün borsadaki temsiliyeti güçleniyor.",
    date: "2016-05-12",
    category: "haber",
  },
];
