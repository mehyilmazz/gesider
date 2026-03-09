"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, Calendar, TrendingUp, Compass, Globe, ShieldCheck } from "lucide-react";
import Tabs from "@/components/ui/Tabs";
import Card from "@/components/ui/Card";
import { currentBoard, boardHistory } from "@/data/board";

const timeline = [
    {
      year: "1996",
      title: "Kuruluş",
      description:
        "GESİDER, 21 kurucu üye ile İstanbul'da kuruldu. Türkiye'de güvenlik sektörünün tek sivil toplum örgütü olarak faaliyetlerine başladı.",
    },
    {
      year: "1997",
      title: "İlk Yönetim Kurulu",
      description:
        "Erol Yılmaz başkanlığında ilk yönetim kurulu göreve başladı.",
    },
    {
      year: "2005",
      title: "Büyüme Dönemi",
      description:
        "Üye sayısı hızla artarak sektörün en kapsamlı temsilcisi konumuna geldi.",
    },
    {
      year: "2009",
      title: "Uluslararası İlişkiler",
      description:
        "ASIS ve COESS gibi uluslararası kuruluşlarla iş birliği başlatıldı.",
    },
    {
      year: "2010",
      title: "Özel Güvenlik Günleri",
      description:
        "GESİDER, ASİS ve GÜSOD iş birliği ile Özel Güvenlik Günleri etkinliklerini düzenledi.",
    },
    {
      year: "2016",
      title: "Dijital Dönüşüm",
      description:
        "Sektörde dijital dönüşüm çalışmaları ve yeni teknoloji entegrasyonları hız kazandı.",
    },
    {
      year: "2025",
      title: "Güçlü Gelecek",
      description:
        "66+ üye ile sektörün güçlü sesi olarak faaliyetlerine devam ediyor.",
    },
  ];

const misyonItems = [
  {
    id: "gelisim",
    title: "Sektörün sağlıklı gelişimine öncülük etmek",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    imageAlt: "Ekip çalışması ve gelişim",
  },
  {
    id: "yol-gosterici",
    title: "Üyelerin ticari ve mesleki faaliyetlerinde yol gösterici olmak",
    icon: Compass,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    imageAlt: "İş birliği ve rehberlik",
  },
  {
    id: "tanitim",
    title: "Güvenlik sektörünün önemini ulusal ve uluslararası platformlarda tanıtmak",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    imageAlt: "Uluslararası platform",
  },
  {
    id: "standartlar",
    title: "Standartların ve uygulama kurallarının birlikteliğini sağlamak",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    imageAlt: "Standartlar ve kalite",
  },
];

function MisyonumuzTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {misyonItems.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group"
        >
          <Card className="overflow-hidden p-0 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
            <div className="relative h-44 sm:h-52 overflow-hidden">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded-xl bg-surface-elevated/90 backdrop-blur-sm border border-border">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-base font-medium text-text-primary leading-relaxed">
                {item.title}
              </p>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

function TarihceTab() {
  return (
    <div className="space-y-6">
      <div className="max-w-4xl space-y-4">
        <p className="text-lg leading-relaxed text-text-secondary">
          GESİDER - Güvenlik Endüstrisi Sanayicileri ve İşadamları Derneği,
          Türkiye&apos;nin önde gelen endüstriyel elektronik ve fiziki güvenlik
          sistemleri ile ilgili cihaz üreten ve/veya ithal eden firmalarının bir
          araya gelmesiyle <strong className="text-text-primary">1996 yılında</strong>{" "}
          kurulmuştur.
        </p>
        <p className="leading-relaxed text-text-secondary">
          Bünyesinde elektronik entegre güvenlik teknolojisinden yakın korumaya,
          alarm haberleşmesinden üretime kadar geniş uzmanlık alanlarına
          ulaşabilme becerisini barındıran GESİDER, Türkiye&apos;de sektörün kapsamlı
          profilini temsil eden sivil toplum kuruluşudur.
        </p>
      </div>
      <div className="relative">
        <div className="absolute bottom-0 left-4 top-0 w-px bg-border" />
        <div className="space-y-6">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative pl-12"
            >
              <div className="absolute left-2 top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-primary/20">
                <div className="h-2 w-2 rounded-full bg-primary" />
              </div>
              <div className="mb-1 text-sm font-bold text-primary">{item.year}</div>
              <h4 className="mb-1 text-lg font-semibold text-text-primary">
                {item.title}
              </h4>
              <p className="text-sm text-text-secondary">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const ALP_SAUL_IMAGE =
  "https://karmer.uludag.edu.tr/Resimler/Yukleme/Girisimci/fa02f7870fcf4710afb585f78d3af226.png";

function PresidentSection() {
  return (
    <div className="w-full">
      <Card className="p-6 lg:p-8">
        <div className="flex flex-col sm:flex-row gap-6 lg:gap-8">
          <div className="shrink-0 flex flex-col items-center sm:items-start">
            <div className="relative h-24 w-24 sm:h-28 sm:w-28 lg:h-32 lg:w-32 rounded-2xl overflow-hidden ring-2 ring-primary/20">
              <Image
                src={ALP_SAUL_IMAGE}
                alt="Alp SAUL - Yönetim Kurulu Başkanı"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 96px, 128px"
              />
            </div>
            <div className="mt-3 text-center sm:text-left">
              <h3 className="text-xl font-bold text-text-primary">
                Başkanın Mesajı
              </h3>
              <p className="text-sm text-text-muted">
                Alp SAUL - Yönetim Kurulu Başkanı
              </p>
            </div>
          </div>
          <div className="flex-1 min-w-0">
        <div className="space-y-4 leading-relaxed text-text-secondary">
          <p>Değerli sektör paydaşlarımız,</p>
          <p>
            GESİDER olarak, sektörün genelini bir araya getirmeye çalıştığımız
            etkinliklerin olumlu karşılanması bizler için önem taşımaktadır.
          </p>
          <p>
            Sektörümüzün daha güçlü ve kurumsal bir yapı altında toplanması en
            büyük hedeflerimizden biridir. Hepimizi ilgilendiren sorunları çözmek
            ve sektörümüzü daha ileriye taşımak için üyelerimizle birlikte
            çalışmayı sürdürüyoruz.
          </p>
          <p>
            Değerli firmanızı derneğimizin çalışmalarına dahil olmaya davet
            ediyor, görüş ve katkılarınızı bekliyoruz.
          </p>
          <p className="font-medium text-text-primary">
            En yakın zamanda görüşmek dileğiyle.
          </p>
        </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

function MevcutYonetimKuruluTab() {
  return (
    <div>
      <p className="mb-5 text-text-muted">{currentBoard.year}</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {currentBoard.members.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <Card className="p-5">
              <div className="flex items-start gap-4">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-primary/10 ring-1 ring-primary/20">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center text-sm font-semibold text-primary">
                      {getInitials(member.name)}
                    </span>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-text-primary">
                    {member.name}
                  </h4>
                  <p className="text-sm font-medium text-primary">
                    {member.title}
                  </p>
                  {member.company && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-text-muted">
                      <Building2 className="h-3 w-3 shrink-0" />
                      {member.company}
                    </p>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function GecmisDonemlerTab() {
  return (
    <div className="space-y-4">
      {boardHistory.map((period) => (
        <Card key={period.period} className="p-5">
          <div className="mb-4 flex items-center gap-3">
            <Calendar className="h-5 w-5 text-primary" />
            <div>
              <h4 className="font-semibold text-text-primary">
                {period.period}
              </h4>
              <p className="text-xs text-text-muted">{period.year}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {period.members.map((member) => (
              <div
                key={member.name}
                className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-text-secondary"
              >
                <span className="font-medium text-text-primary">
                  {member.name}
                </span>
                <span className="text-text-muted"> - {member.title}</span>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}

function CharterSection() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <p className="mb-4 leading-relaxed text-text-secondary">
          GESİDER tüzüğü, derneğin amaçları, çalışma ilkeleri, üyelik koşulları
          ve yönetim yapısını düzenleyen temel belgedir. Kuruluş tarihi
          10.07.1996 olan derneğimiz, güvenlik sektörünün gelişimine yönelik
          faaliyetlerini bu çerçevede yürütmektedir.
        </p>
        <p className="leading-relaxed text-text-secondary">
          Tüzüğün tam metnine ulaşmak için dernek merkezimiz ile iletişime
          geçebilirsiniz.
        </p>
      </Card>
    </div>
  );
}

const hakkimizdaTabs = [
  { id: "misyonumuz", label: "Misyonumuz", content: <MisyonumuzTab /> },
  { id: "tarihce", label: "Tarihçe", content: <TarihceTab /> },
  { id: "baskanin-mesaji", label: "Başkanın Mesajı", content: <PresidentSection /> },
  { id: "mevcut-yonetim", label: "Mevcut Yönetim Kurulu", content: <MevcutYonetimKuruluTab /> },
  { id: "gecmis-donemler", label: "Geçmiş Dönemler", content: <GecmisDonemlerTab /> },
  { id: "tuzuk", label: "Tüzük", content: <CharterSection /> },
];

export default function HakkimizdaPage() {
  return (
    <section className="section-padding pt-24 lg:pt-28">
      <div className="container-custom">
        <Tabs tabs={hakkimizdaTabs} defaultTab="misyonumuz" />
      </div>
    </section>
  );
}
