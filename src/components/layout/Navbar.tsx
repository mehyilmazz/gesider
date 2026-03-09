"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="group">
            <div className="rounded-xl bg-white/95 px-2.5 py-1.5 ring-1 ring-white/40 shadow-sm transition-all duration-300 group-hover:ring-primary/40">
              <Image
                src="/gesider-logo.png"
                alt="GESIDER"
                width={338}
                height={82}
                priority
                className="h-7 w-auto sm:h-8 lg:h-9"
              />
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div key={item.href} className="relative">
                <Link
                  href={item.href}
                  className={cn(
                    "px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1",
                    pathname === item.href
                      ? "text-primary bg-primary/10"
                      : "text-text-secondary hover:text-text-primary hover:bg-surface-elevated/50"
                  )}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-elevated/50 transition-colors"
            aria-label={"Men\u00fc"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden glass border-t border-border overflow-hidden"
          >
            <div className="container-custom py-4 space-y-1">
              {navigation.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                      pathname === item.href
                        ? "text-primary bg-primary/10"
                        : "text-text-secondary hover:text-text-primary hover:bg-surface-elevated/50"
                    )}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
