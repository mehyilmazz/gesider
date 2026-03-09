"use client";

import { motion } from "framer-motion";
import { Briefcase, Send, MapPin, Clock } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

const openPositions = [
  {
    id: "1",
    title: "Genel Başvuru",
    department: "Tüm Departmanlar",
    location: "İstanbul, Beşiktaş",
    type: "Tam Zamanlı",
    description:
      "GESİDER bünyesinde çalışmak isteyenler için genel başvuru. Uygun pozisyonlar açıldığında başvurunuz değerlendirilecektir.",
  },
];

export default function KariyerPage() {
  return (
    <>
      <PageHeader
        title="Kariyer"
        description="GESİDER ekibine katılın, güvenlik sektörünün geleceğine katkı sağlayın."
      />

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Açık Pozisyonlar"
            title="Kariyer Fırsatları"
            description="Aşağıdaki açık pozisyonları inceleyebilir veya genel başvuru yapabilirsiniz."
          />

          <div className="max-w-3xl mx-auto space-y-4 mb-16">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-text-primary">
                          {position.title}
                        </h3>
                        <p className="text-sm text-text-muted">{position.department}</p>
                      </div>
                    </div>
                    <Badge variant="primary">{position.type}</Badge>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {position.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-xs text-text-muted">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {position.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {position.type}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <SectionHeading
              badge="Başvuru"
              title="Genel Başvuru Formu"
              description="Özgeçmişinizi göndererek başvurunuzu yapın. Uygun pozisyonlar açıldığında sizinle iletişime geçeceğiz."
            />

            <Card className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                      placeholder="Ad Soyad"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                      placeholder="0500 000 00 00"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      İlgilendiğiniz Alan
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all">
                      <option value="">Seçiniz</option>
                      <option value="yonetim">Yönetim</option>
                      <option value="teknik">Teknik</option>
                      <option value="iletisim">İletişim</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Kendinizden Bahsedin
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                    placeholder="Deneyimleriniz, yetkinlikleriniz ve beklentileriniz hakkında kısaca bilgi veriniz..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Başvuruyu Gönder
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
