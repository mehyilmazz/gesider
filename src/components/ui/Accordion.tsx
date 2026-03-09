"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItem {
  id: string;
  title: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export default function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    } else {
      setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);
        return (
          <div
            key={item.id}
            className={cn(
              "rounded-2xl border transition-all duration-300",
              isOpen
                ? "border-primary/30 bg-surface-elevated/80 shadow-lg shadow-primary/5"
                : "border-border bg-surface-elevated/40 hover:border-border-hover"
            )}
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center gap-4 p-5 text-left"
            >
              {item.icon && (
                <div
                  className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors",
                    isOpen
                      ? "bg-primary/20 text-primary"
                      : "bg-surface text-text-muted"
                  )}
                >
                  {item.icon}
                </div>
              )}
              <span
                className={cn(
                  "flex-1 font-semibold transition-colors",
                  isOpen ? "text-text-primary" : "text-text-secondary"
                )}
              >
                {item.title}
              </span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-text-muted transition-transform duration-300",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 text-text-secondary text-sm leading-relaxed">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
