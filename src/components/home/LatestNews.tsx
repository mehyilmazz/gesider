"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { news } from "@/data/news";
import { formatDate } from "@/lib/utils";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";

const categoryLabels: Record<string, string> = {
  duyuru: "Duyuru",
  haber: "Haber",
  etkinlik: "Etkinlik",
  basin: "Basın",
};

export default function LatestNews() {
  const latestNews = news.slice(0, 3);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          badge="Güncel"
          title="Son Haberler & Duyurular"
          description="Sektördeki gelişmeleri ve derneğimizin faaliyetlerini yakından takip edin."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestNews.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/haberler/${item.slug}`} className="group block h-full">
                <div className="h-full p-6 rounded-2xl border border-border bg-surface-elevated/40 transition-all duration-300 group-hover:border-primary/30 group-hover:bg-surface-elevated/60 group-hover:shadow-lg group-hover:shadow-primary/5">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="primary">{categoryLabels[item.category]}</Badge>
                    <span className="flex items-center gap-1.5 text-xs text-text-muted">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(item.date)}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Devamını Oku
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/haberler"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-text-secondary font-medium hover:text-text-primary hover:border-border-hover hover:bg-surface-elevated/30 transition-all"
          >
            Tüm Haberleri Görüntüle
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
