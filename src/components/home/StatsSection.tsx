"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/site";

export default function StatsSection() {
  return (
    <section className="section-padding relative -mt-8 lg:-mt-12 z-20">
      <div className="container-custom">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="rounded-2xl border border-border bg-surface-elevated/40 p-4 text-center transition-all duration-300 group-hover:border-primary/30 group-hover:bg-surface-elevated/60 lg:p-5">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text">
                  {stat.value}
                  {stat.suffix && (
                    <span className="text-primary">{stat.suffix}</span>
                  )}
                </div>
                <div className="mt-2 text-sm text-text-muted font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
