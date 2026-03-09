"use client";

import Image from "next/image";

const COMPANY_LOGOS = [
  "arte.png",
  "biges.jpg",
  "bilgi.png",
  "bilmak.jpg",
  "denge.png",
  "desi.jpg",
  "eds.jpg",
  "eec_systems.jpg",
  "elektro.jpg",
  "etken.jpg",
  "frenklin.jpg",
  "g4s.jpg",
  "han_elektronik.png",
  "its.jpg",
  "koyuncu.jpg",
  "ks.png",
  "mak.jpg",
  "mavili.jpg",
  "mgs.png",
  "nemesis.jpg",
  "nfs.png",
  "okisan.jpg",
  "pronet.jpg",
  "safepoint_125x125.png",
  "secritas.jpg",
  "sensor.png",
  "sensormatik.jpg",
  "tav_guvenlik.jpg",
  "teknik.jpg",
  "telekomm.png",
  "tepe.png",
  "tesan.png",
  "topcu.png",
  "videofon.jpg",
  "1418829985_senkron.jpg",
  "1418890685_tam.jpg",
];

export default function LogoMarquee() {
  const logos = [...COMPANY_LOGOS, ...COMPANY_LOGOS];

  return (
    <div className="logo-marquee relative overflow-hidden">
      {/* Kenar fade - kaydırma için modern efekt */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent" />

      <div className="flex animate-marquee items-center gap-6 py-6">
        {logos.map((logo, index) => (
          <div
            key={`${logo}-${index}`}
            className="flex flex-shrink-0 items-center justify-center"
          >
            {/* Referanstaki gibi şık beyaz kart yapısı */}
            <div className="logo-card group relative flex h-20 w-36 shrink-0 cursor-default items-center justify-center rounded-xl bg-white px-4 py-3 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)] ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_-5px_rgba(59,130,246,0.3)] sm:h-24 sm:w-44">
              <Image
                src={`/gesider-sirket-logo/${logo}`}
                alt=""
                width={140}
                height={70}
                className="h-full w-full object-contain object-center"
                loading="eager"
                unoptimized
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
