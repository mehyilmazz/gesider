"use client";

import Image from "next/image";

// Normalize edilmis logolar (320x160, beyaz zemin, esit ic bosluk).
// Pronet ve bilinen buyuk markalar one alindi.
// Yeni logo eklenince: dosyayi public/gesider-sirket-logo/ altina koy,
// `npm run logos:normalize` calistir, adini bu listeye ekle.
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

// Cift sira zit yonlu akis: ust sira sola, alt sira saga akar;
// uzerine gelince durur ve kart mavi parlamayla vurgulanir.
export default function LogoMarquee() {
  const half = Math.ceil(COMPANY_LOGOS.length / 2);
  const rows: { logos: string[]; anim: string }[] = [
    { logos: COMPANY_LOGOS.slice(0, half), anim: "animate-marquee-slow" },
    { logos: COMPANY_LOGOS.slice(half), anim: "animate-marquee-rev" },
  ];

  return (
    <div className="marquee-pausable relative space-y-4 overflow-hidden py-6">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />

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
