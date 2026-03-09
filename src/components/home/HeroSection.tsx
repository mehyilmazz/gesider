"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />

      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">
                1996&apos;dan Bu Yana Sektörün Öncüsü
              </span>
              <ChevronRight className="w-4 h-4 text-primary" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="text-text-primary">Güvenlik Endüstrisinde</span>
            <br />
            <span className="gradient-text">Birlikte Daha Güçlü</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl leading-relaxed"
          >
            GESİDER, Türkiye&apos;nin önde gelen güvenlik endüstrisi
            sanayicileri ve işadamlarını bir araya getirerek sektörün
            gelişimine öncülük etmektedir.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/hakkimizda"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-gradient-primary text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
            >
              Bizi Tanıyın
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/uyelik"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border text-text-secondary font-semibold hover:text-text-primary hover:border-border-hover hover:bg-surface-elevated/30 transition-all"
            >
              Üye Olun
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-text-muted/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-2.5 rounded-full bg-text-muted/50" />
        </motion.div>
      </div>
    </section>
  );
}
