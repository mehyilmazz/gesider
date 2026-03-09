"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-primary opacity-90" />
          <div className="absolute inset-0 dot-pattern opacity-10" />
          <div className="relative px-8 py-16 sm:px-16 sm:py-20 lg:px-24 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Sektörün Gücüne Ortak Olun
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              GESİDER&apos;e üye olarak güvenlik endüstrisinin geleceğini
              birlikte şekillendirin. 66+ üyemizle güçlerimizi birleştiriyoruz.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/uyelik"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-primary font-bold hover:bg-white/90 transition-colors shadow-xl"
              >
                Hemen Üye Olun
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Bize Ulaşın
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
