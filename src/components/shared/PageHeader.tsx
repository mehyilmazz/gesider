"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pb-6 pt-24 lg:pb-8 lg:pt-28">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary">
            {title}
          </h1>
          {description && (
            <p className="mt-2 max-w-2xl text-lg text-text-secondary sm:text-xl">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
