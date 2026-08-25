"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Normalize edilmis logolar (320x160, beyaz zemin, esit ic bosluk)
// Pronet ve bilinen buyuk markalar one alindi.
const COMPANY_LOGOS = [
  "pronet",
  "tav_guvenlik",
  "secritas",
  "tepe",
  "g4s",
  "arte",
  "biges",
  "bilgi",
  "bilmak",
  "denge",
  "desi",
  "eds",
  "eec_systems",
  "elektro",
  "etken",
  "frenklin",
  "han_elektronik",
  "its",
  "koyuncu",
  "ks",
  "mak",
  "mavili",
  "mgs",
  "nemesis",
  "nfs",
  "okisan",
  "safepoint_125x125",
  "sensor",
  "sensormatik",
  "teknik",
  "telekomm",
  "tesan",
  "topcu",
  "videofon",
  "1418829985_senkron",
  "1418890685_tam",
];

const src = (name: string) => `/gesider-sirket-logo/normalized/${name}.webp`;

export type LogoMarqueeVariant = 1 | 2 | 3 | 4;

interface LogoMarqueeProps {
  variant?: LogoMarqueeVariant;
}

function EdgeFades() {
  return (
    <>
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />
    </>
  );
}

/* V1 - Rafine beyaz kartlar: yavas akis, yumusak golge, hover'da durma + lift */
function VariantCards() {
  const logos = [...COMPANY_LOGOS, ...COMPANY_LOGOS];
  return (
    <div className="logo-marquee marquee-pausable relative overflow-hidden">
      <EdgeFades />
      <div className="flex w-max animate-marquee-slow items-center gap-5 py-6">
        {logos.map((logo, index) => (
          <div
            key={`${logo}-${index}`}
            className="logo-card group flex h-[72px] w-[144px] shrink-0 items-center justify-center rounded-2xl bg-white p-3 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.25)] ring-1 ring-white/[0.08] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-8px_rgba(59,130,246,0.35)]"
          >
            <Image
              src={src(logo)}
              alt=""
              width={320}
              height={160}
              className="h-full w-full"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/* V2 - Monokrom serit: kart yok, logolar isik-gri tonda zeminle butunlesir */
function VariantMono() {
  const logos = [...COMPANY_LOGOS, ...COMPANY_LOGOS];
  return (
    <div className="marquee-pausable relative overflow-hidden">
      <EdgeFades />
      <div className="flex w-max animate-marquee-slow items-center gap-12 py-8">
        {logos.map((logo, index) => (
          <div key={`${logo}-${index}`} className="logo-mono h-12 w-28 shrink-0 sm:h-14 sm:w-32">
            <Image
              src={src(logo)}
              alt=""
              width={320}
              height={160}
              className="h-full w-full object-contain"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/* V3 - Cift sira zit yonlu akis: kucuk kartlar, ust sira sola / alt sira saga */
function VariantDualRow() {
  const half = Math.ceil(COMPANY_LOGOS.length / 2);
  const rows: { logos: string[]; anim: string }[] = [
    { logos: COMPANY_LOGOS.slice(0, half), anim: "animate-marquee-slow" },
    { logos: COMPANY_LOGOS.slice(half), anim: "animate-marquee-rev" },
  ];
  return (
    <div className="marquee-pausable relative space-y-4 overflow-hidden py-6">
      <EdgeFades />
      {rows.map((row, rowIndex) => {
        const doubled = [...row.logos, ...row.logos];
        return (
          <div key={rowIndex} className="logo-marquee overflow-hidden">
            <div className={`flex w-max items-center gap-4 ${row.anim}`}>
              {doubled.map((logo, index) => (
                <div
                  key={`${logo}-${index}`}
                  className="logo-card flex h-14 w-28 shrink-0 items-center justify-center rounded-xl bg-white p-2 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.3)] ring-1 ring-white/[0.08] transition-all duration-300 hover:ring-primary/40 hover:shadow-[0_0_20px_-4px_rgba(59,130,246,0.5)] sm:h-16 sm:w-32"
                >
                  <Image
                    src={src(logo)}
                    alt=""
                    width={320}
                    height={160}
                    className="h-full w-full"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* V4 - Statik logo duvari: akis yok, kompakt grid + uyeler sayfasina davet */
function VariantGrid() {
  const shown = COMPANY_LOGOS.slice(0, 17);
  return (
    <div className="py-6">
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
        {shown.map((logo) => (
          <div
            key={logo}
            className="logo-card group flex h-16 items-center justify-center rounded-xl bg-white p-2.5 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.25)] ring-1 ring-white/[0.08] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-6px_rgba(59,130,246,0.35)]"
          >
            <Image
              src={src(logo)}
              alt=""
              width={320}
              height={160}
              className="h-full w-full grayscale transition-all duration-300 group-hover:grayscale-0"
              unoptimized
            />
          </div>
        ))}
        <Link
          href="/uyelik"
          className="group flex h-16 items-center justify-center gap-1.5 rounded-xl border border-primary/25 bg-primary/10 text-sm font-semibold text-primary transition-all duration-300 hover:border-primary/50 hover:bg-primary/20"
        >
          +40 üye
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}

export default function LogoMarquee({ variant = 1 }: LogoMarqueeProps) {
  switch (variant) {
    case 2:
      return <VariantMono />;
    case 3:
      return <VariantDualRow />;
    case 4:
      return <VariantGrid />;
    default:
      return <VariantCards />;
  }
}
