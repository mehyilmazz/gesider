"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search, Building2 } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
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
      <section className="section-padding pt-24 lg:pt-28">
        <div className="container-custom">
          <div className="mx-auto mb-8 max-w-3xl rounded-2xl border border-border bg-surface-elevated/40 px-5 py-4 text-center">
            <p className="text-sm leading-relaxed text-text-secondary sm:text-base">
              {"\u00dcyelik ba\u015fvurular\u0131 ve kurumsal bilgi talepleri i\u00e7in "}
              <Link
                href="/iletisim"
                className="font-medium text-primary transition-colors hover:text-primary-light"
              >
                {"\u0130leti\u015fim"}
              </Link>
              {" sayfas\u0131 \u00fczerinden bizimle ileti\u015fime ge\u00e7ebilirsiniz."}
            </p>
          </div>

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
    </>
  );
}
