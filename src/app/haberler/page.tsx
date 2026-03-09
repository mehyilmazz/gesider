"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Filter } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { news } from "@/data/news";
import { formatDate } from "@/lib/utils";

const categories = [
  { id: "all", label: "Tümü" },
  { id: "duyuru", label: "Duyurular" },
  { id: "haber", label: "Haberler" },
  { id: "etkinlik", label: "Etkinlikler" },
  { id: "basin", label: "Basın" },
];

const categoryLabels: Record<string, string> = {
  duyuru: "Duyuru",
  haber: "Haber",
  etkinlik: "Etkinlik",
  basin: "Basın",
};

export default function HaberlerPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredNews =
    activeCategory === "all"
      ? news
      : news.filter((n) => n.category === activeCategory);

  return (
    <>
      <section className="section-padding pt-24 lg:pt-28">
        <div className="container-custom">
          <div className="flex items-center gap-2 flex-wrap mb-10">
            <Filter className="w-4 h-4 text-text-muted mr-1" />
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary/15 text-primary border border-primary/30"
                    : "bg-surface-elevated/40 text-text-muted border border-border hover:text-text-secondary hover:border-border-hover"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link
                  href={`/haberler/${item.slug}`}
                  className="group block h-full"
                >
                  <div className="h-full p-6 rounded-2xl border border-border bg-surface-elevated/40 transition-all duration-300 group-hover:border-primary/30 group-hover:bg-surface-elevated/60 group-hover:shadow-lg group-hover:shadow-primary/5">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="primary">
                        {categoryLabels[item.category]}
                      </Badge>
                      <span className="flex items-center gap-1.5 text-xs text-text-muted">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(item.date)}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed line-clamp-3 mb-4">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center gap-1 text-sm font-medium text-primary">
                      Devamını Oku
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-20">
              <p className="text-text-muted text-lg">
                Bu kategoride henüz içerik bulunmamaktadır.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
