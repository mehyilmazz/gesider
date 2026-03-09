"use client";

import { motion } from "framer-motion";
import { User, Building2, Calendar, Award } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import Tabs from "@/components/ui/Tabs";
import Card from "@/components/ui/Card";
import { currentBoard, boardHistory } from "@/data/board";

function HistoryTab() {
  const timeline = [
    { year: "1996", title: "Kuruluş", description: "GESİDER, 21 kurucu üye ile İstanbul'da kuruldu. Türkiye'de güvenlik sektörünün tek sivil toplum örgütü olarak faaliyete başladı." },
    { year: "1997", title: "İlk Yönetim Kurulu", description: "Erol Yılmaz başkanlığında ilk yönetim kurulu göreve başladı." },
    { year: "2005", title: "Büyüme Dönemi", description: "Üye sayısı hızla artarak sektörün en kapsamlı temsilcisi konumuna geldi." },
    { year: "2009", title: "Uluslararası İlişkiler", description: "ASIS ve COESS gibi uluslararası kuruluşlarla iş birliği başlatıldı." },
    { year: "2010", title: "Özel Güvenlik Günleri", description: "GESİDER, ASİS ve GÜSOD iş birliği ile 'Özel Güvenlik Günleri' düzenlendi." },
    { year: "2016", title: "Dijital Dönüşüm", description: "Sektörde dijital dönüşüm çalışmaları ve yeni teknoloji entegrasyonları hız kazandı." },
    { year: "2025", title: "Güçlü Gelecek", description: "66+ üye ile sektörün en güçlü sesi olarak faaliyetlerine devam ediyor." },
  ];

  return (
    <div className="space-y-12">
      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-text-secondary leading-relaxed">
          GESİDER - Güvenlik Endüstrisi Sanayicileri ve İşadamları Derneği, Türkiye&apos;nin önde gelen
          endüstriyel elektronik ve fiziki güvenlik sistemleri ile ilgili cihaz üreten ve/veya ithal
          eden firmaların bir araya gelmesiyle <strong className="text-text-primary">1996 yılında</strong> kurulmuştur.
        </p>
        <p className="text-text-secondary leading-relaxed">
          Bünyesinde elektronik entegre güvenlik teknolojisinden yakın korumaya, alarm haberleşmesinden
          üretime kadar geniş uzmanlık alanlarına ulaşabilme becerisini barındıran GESİDER,
          Türkiye&apos;de sektörün kapsamlı profilini temsil eden tek sivil toplum örgütüdür.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-text-primary mb-4">Misyonumuz</h3>
        <ul className="space-y-3">
          {[
            "Sektörün sağlıklı gelişmesine öncülük etmek",
            "Üyelerin ticari ve mesleki faaliyetlerinde yol gösterici olmak",
            "Güvenlik sektörünün önemini ulusal ve uluslararası platformlarda tanıtmak",
            "Standartların ve uygulama kurallarının birlikteliğini sağlamak",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text-secondary">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-text-primary mb-8">Tarihçe</h3>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative pl-12"
              >
                <div className="absolute left-2 top-1 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div className="text-sm font-bold text-primary mb-1">{item.year}</div>
                <h4 className="text-lg font-semibold text-text-primary mb-1">{item.title}</h4>
                <p className="text-sm text-text-secondary">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PresidentTab() {
  return (
    <div className="max-w-3xl">
      <Card className="p-8 lg:p-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center">
            <User className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-text-primary">Başkanın Mesajı</h3>
            <p className="text-sm text-text-muted">Alp SAUL - Yönetim Kurulu Başkanı</p>
          </div>
        </div>
        <div className="space-y-4 text-text-secondary leading-relaxed">
          <p>
            Değerli sektör paydaşlarımız,
          </p>
          <p>
            GESİDER olarak, sektörün genelini bir araya getirmeye çalıştığımız etkinliklerin
            olumlu karşılandığını görmek bizleri çok mutlu etmektedir.
          </p>
          <p>
            Sektörümüzün daha güçlü ve kurumsal bir yapı altında toplanması en büyük
            dileğimizdir. Hepimizi ilgilendiren sorunları çözmek ve sektörümüzü daha ileriye
            taşıyabilmek için sizinle çalışma arzusundayız.
          </p>
          <p>
            Bu nedenle değerli firmanızı derneğimize üye olmaya davet ediyor,
            geri bildirimlerinizi dört gözle bekliyoruz.
          </p>
          <p className="text-text-primary font-medium">
            En yakın zamanda görüşmek dileğiyle.
          </p>
        </div>
      </Card>
    </div>
  );
}

function BoardTab() {
  return (
    <div className="space-y-12">
      <div>
        <h3 className="text-2xl font-bold text-text-primary mb-2">
          {currentBoard.period}
        </h3>
        <p className="text-text-muted mb-6">{currentBoard.year}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentBoard.members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">{member.name}</h4>
                    <p className="text-sm text-primary font-medium">{member.title}</p>
                    {member.company && (
                      <p className="text-xs text-text-muted mt-1 flex items-center gap-1">
                        <Building2 className="w-3 h-3" />
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

      <div>
        <h3 className="text-2xl font-bold text-text-primary mb-6">Geçmiş Dönemler</h3>
        <div className="space-y-4">
          {boardHistory.map((period) => (
            <Card key={period.period} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <h4 className="font-semibold text-text-primary">{period.period}</h4>
                  <p className="text-xs text-text-muted">{period.year}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {period.members.map((m) => (
                  <div
                    key={m.name}
                    className="px-3 py-1.5 rounded-lg bg-surface text-sm text-text-secondary border border-border"
                  >
                    <span className="font-medium text-text-primary">{m.name}</span>
                    <span className="text-text-muted"> - {m.title}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

function CharterTab() {
  return (
    <div className="space-y-8">
      <Card className="p-8">
        <div className="flex items-center gap-3 mb-4">
          <Award className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-bold text-text-primary">Dernek Tüzüğü</h3>
        </div>
        <p className="text-text-secondary leading-relaxed mb-4">
          GESİDER tüzüğü, derneğin amaçları, çalışma ilkeleri, üyelik koşulları ve
          yönetim yapısını düzenleyen temel belgedir. Kuruluş tarihi 10.07.1996 olan
          derneğimiz, güvenlik sektörünün gelişimine yönelik faaliyetlerini tüzük
          çerçevesinde yürütmektedir.
        </p>
        <p className="text-text-secondary leading-relaxed">
          Tüzüğün tam metnine ulaşmak için
          lütfen dernek merkezimiz ile iletişime geçiniz.
        </p>
      </Card>
    </div>
  );
}

export default function HakkimizdaPage() {
  const tabs = [
    { id: "tarihce", label: "Tarihçe & Misyon", content: <HistoryTab /> },
    { id: "baskan", label: "Başkanın Mesajı", content: <PresidentTab /> },
    { id: "yonetim", label: "Yönetim Kurulu", content: <BoardTab /> },
    { id: "tuzuk", label: "Tüzük", content: <CharterTab /> },
  ];

  return (
    <>
      <PageHeader
        title="Hakkımızda"
        description="1996'dan bu yana güvenlik endüstrisinin gelişimine öncülük ediyoruz."
      />
      <section className="section-padding">
        <div className="container-custom">
          <Tabs tabs={tabs} defaultTab="tarihce" />
        </div>
      </section>
    </>
  );
}
