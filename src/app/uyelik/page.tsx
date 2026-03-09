"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Building2, Mail, Send } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/ui/SectionHeading";
import { members } from "@/data/members";

export default function UyelikPage() {
  const [search, setSearch] = useState("");

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(search.toLowerCase()) ||
      member.sector.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <PageHeader
        title={"\u00dcyelik"}
        description={"GESIDER ailesine kat\u0131l\u0131n, sekt\u00f6r\u00fcn g\u00fcc\u00fcne ortak olun."}
      />

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge={"\u00dcyelerimiz"}
            title={"GESIDER \u00dcye Firmalar\u0131"}
            description={"G\u00fcvenlik sekt\u00f6r\u00fcn\u00fcn \u00f6nde gelen firmalar\u0131n\u0131 b\u00fcnyemizde bar\u0131nd\u0131r\u0131yoruz."}
          />

          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input
                type="text"
                placeholder={"Firma ad\u0131 veya sekt\u00f6r ile aray\u0131n..."}
                value={search}
                onChange={(event) => setSearch(event.target.value)}
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
                      <h3 className="font-semibold text-text-primary text-sm">{member.name}</h3>
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
            badge={"Ba\u015fvuru"}
            title={"\u00dcyelik Ba\u015fvurusu"}
            description={"Online \u00fcyelik formu kald\u0131r\u0131lm\u0131\u015ft\u0131r. Ba\u015fvurular e-posta \u00fczerinden al\u0131nmaktad\u0131r."}
          />

          <div className="max-w-2xl mx-auto">
            <Card className="p-8 space-y-6">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p className="text-text-secondary leading-relaxed">
                  {"\u00dcyelik ba\u015fvurusu yapmak i\u00e7in firma bilgilerinizi ve ileti\u015fim detaylar\u0131n\u0131z\u0131 "}
                  <a className="text-primary font-medium ml-1" href="mailto:admin@gesider.org">
                    admin@gesider.org
                  </a>
                  {" adresine g\u00f6nderiniz."}
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface-elevated/40 p-5">
                <h3 className="text-sm font-semibold text-text-primary mb-3">{"E-posta i\u00e7eri\u011fi \u00f6nerisi"}</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>{"- Firma ad\u0131 / yetkili ki\u015fi"}</li>
                  <li>{"- Faaliyet alan\u0131"}</li>
                  <li>{"- Telefon ve e-posta bilgisi"}</li>
                  <li>{"- K\u0131sa ba\u015fvuru notu"}</li>
                </ul>
              </div>

              <a
                href="mailto:admin@gesider.org?subject=GESIDER%20Uyelik%20Basvurusu"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              >
                <Send className="w-4 h-4" />
                {"admin@gesider.org adresine e-posta g\u00f6nder"}
              </a>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}