"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Download,
  BookOpen,
  Info,
  Wrench,
  Search,
} from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { resources } from "@/data/resources";

const categoryConfig: Record<
  string,
  { label: string; icon: typeof FileText; variant: "primary" | "accent" | "default" }
> = {
  teknik: { label: "Teknik Doküman", icon: Wrench, variant: "primary" },
  makale: { label: "Makale", icon: BookOpen, variant: "accent" },
  bilgi: { label: "Faydalı Bilgi", icon: Info, variant: "default" },
};

const filters = [
  { id: "all", label: "Tümü" },
  { id: "teknik", label: "Teknik Dokümanlar" },
  { id: "makale", label: "Makaleler" },
  { id: "bilgi", label: "Faydalı Bilgiler" },
];

export default function KaynaklarPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = resources.filter((r) => {
    const matchesCategory =
      activeFilter === "all" || r.category === activeFilter;
    const matchesSearch =
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <PageHeader
        title="Kaynaklar"
        description="Teknik dokümanlar, makaleler ve faydalı bilgiler ile sektörel bilgi birikiminizi artırın."
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input
                type="text"
                placeholder="Kaynaklarda arayın..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {filters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    activeFilter === f.id
                      ? "bg-primary/15 text-primary border border-primary/30"
                      : "bg-surface-elevated/40 text-text-muted border border-border hover:text-text-secondary hover:border-border-hover"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((resource, index) => {
              const config = categoryConfig[resource.category];
              const IconComponent = config.icon;

              return (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="p-6 h-full flex flex-col">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <Badge variant={config.variant}>{config.label}</Badge>
                    </div>
                    <h3 className="text-base font-semibold text-text-primary mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed flex-1">
                      {resource.description}
                    </p>
                    {resource.downloadUrl && (
                      <a
                        href={resource.downloadUrl}
                        className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary hover:text-primary-light transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        İndir
                      </a>
                    )}
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <FileText className="w-12 h-12 text-text-muted mx-auto mb-4" />
              <p className="text-text-muted text-lg">
                Aradığınız kriterlere uygun kaynak bulunamadı.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
