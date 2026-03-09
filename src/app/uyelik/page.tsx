"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Building2, Send, Users, UserPlus } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { members } from "@/data/members";

export default function UyelikPage() {
  const [search, setSearch] = useState("");
  const [formType, setFormType] = useState<"tuzel" | "bireysel">("tuzel");

  const filteredMembers = members.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.sector.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <PageHeader
        title="Üyelik"
        description="GESİDER ailesine katılın, sektörün gücüne ortak olun."
      />

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Üyelerimiz"
            title="GESİDER Üye Firmaları"
            description="Güvenlik sektörünün önde gelen firmalarını bünyemizde barındırıyoruz."
          />

          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input
                type="text"
                placeholder="Firma adı veya sektör ile arayın..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
              >
                <Card className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary text-sm">
                        {member.name}
                      </h3>
                      <Badge variant="outline" className="mt-1.5">
                        {member.sector}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="container-custom">
          <SectionHeading
            badge="Başvuru"
            title="Online Üyelik Başvurusu"
            description="Tüzel veya bireysel üyelik başvurunuzu aşağıdaki formu doldurarak yapabilirsiniz."
          />

          <div className="max-w-2xl mx-auto">
            <div className="flex gap-2 mb-8 p-1.5 bg-surface rounded-xl border border-border">
              <button
                onClick={() => setFormType("tuzel")}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  formType === "tuzel"
                    ? "bg-surface-elevated text-text-primary border border-border-hover"
                    : "text-text-muted hover:text-text-secondary"
                }`}
              >
                <Building2 className="w-4 h-4" />
                Tüzel Üyelik
              </button>
              <button
                onClick={() => setFormType("bireysel")}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  formType === "bireysel"
                    ? "bg-surface-elevated text-text-primary border border-border-hover"
                    : "text-text-muted hover:text-text-secondary"
                }`}
              >
                <Users className="w-4 h-4" />
                Bireysel Üyelik
              </button>
            </div>

            <Card className="p-8">
              <form className="space-y-6">
                {formType === "tuzel" ? (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-text-secondary mb-2">
                          Firma Adı *
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                          placeholder="Firma adı"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-secondary mb-2">
                          Yetkili Adı Soyadı *
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                          placeholder="Ad Soyad"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-text-secondary mb-2">
                          Faaliyet Alanı *
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                          placeholder="Faaliyet alanı"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-secondary mb-2">
                          Vergi No
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                          placeholder="Vergi numarası"
                        />
                      </div>
                    </div>
                  </>
                ) : (
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
                        Meslek *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                        placeholder="Mesleğiniz"
                      />
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                      placeholder="ornek@firma.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                      placeholder="0212 000 00 00"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Adres
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                    placeholder="Firma / Ev adresi"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <UserPlus className="w-5 h-5 mr-2" />
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
