"use client";

import { motion } from "framer-motion";
import {
  Cctv,
  Bell,
  ScanLine,
  Flame,
  Eye,
  Headset,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    icon: Cctv,
    title: "CCTV & Kamera Sistemleri",
    description:
      "Kapalı devre kamera ve video gözetleme sistemleri ile güvenliğinizi 7/24 sağlıyoruz.",
  },
  {
    icon: Bell,
    title: "Alarm Sistemleri",
    description:
      "Son teknoloji alarm ve haber alma sistemleri ile tehditlere anında müdahale.",
  },
  {
    icon: ScanLine,
    title: "Kartlı Geçiş Sistemleri",
    description:
      "Biyometrik ve kartlı geçiş çözümleri ile giriş-çıkışlarınız tam kontrol altında.",
  },
  {
    icon: Flame,
    title: "Yangın Algılama & İhbar",
    description:
      "Yangın algılama ve ihbar sistemleri ile tesislerinizi yangın riskine karşı koruyoruz.",
  },
  {
    icon: Eye,
    title: "Şehir İzleme Sistemleri",
    description:
      "Akıllı şehir izleme çözümleri ile kentsel güvenliğe katkı sağlıyoruz.",
  },
  {
    icon: Headset,
    title: "Danışmanlık & Eğitim",
    description:
      "Güvenlik sektöründe uzman danışmanlık ve eğitim hizmetleri sunuyoruz.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="container-custom relative">
        <SectionHeading
          badge="Faaliyet Alanları"
          title="Güvenlik Sektörünün Tüm Bileşenleri"
          description="Üyelerimiz aracılığıyla güvenlik endüstrisinin her alanında çözümler sunuyoruz."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
            >
              <div className="h-full p-6 lg:p-8 rounded-2xl border border-border bg-surface-elevated/40 transition-all duration-300 hover:border-primary/30 hover:bg-surface-elevated/60 hover:shadow-lg hover:shadow-primary/5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
