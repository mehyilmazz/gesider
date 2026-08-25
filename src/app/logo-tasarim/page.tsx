import LogoMarquee, { type LogoMarqueeVariant } from "@/components/home/LogoMarquee";

export const metadata = {
  title: "Logo Alanı Tasarım Testi",
  robots: { index: false, follow: false },
};

const VARIANTS: { id: LogoMarqueeVariant; title: string; description: string }[] = [
  {
    id: 1,
    title: "Tasarım 1 — Rafine Beyaz Kartlar",
    description:
      "Mevcut yaklaşımın cilalı hali: eşit boyutlu kartlar, yavaş akış, üzerine gelince durur ve kart hafifçe yükselir.",
  },
  {
    id: 2,
    title: "Tasarım 2 — Monokrom Şerit",
    description:
      "Kart yok; logolar açık gri tonda zeminle bütünleşir, üzerine gelince belirginleşir. En minimal ve modern görünüm.",
  },
  {
    id: 3,
    title: "Tasarım 3 — Çift Sıra Zıt Yönlü Akış",
    description:
      "Logolar iki sıraya bölünür, üst sıra sola alt sıra sağa akar. Üzerine gelince durur ve mavi parlamayla vurgulanır.",
  },
  {
    id: 4,
    title: "Tasarım 4 — Statik Logo Duvarı",
    description:
      "Hareket yok: kompakt bir grid'de öne çıkan üyeler, gri tondan renke geçen hover ve üyeler sayfasına davet kutusu.",
  },
];

export default function LogoTasarimPage() {
  return (
    <main className="section-padding pt-24 lg:pt-28">
      <div className="container-custom space-y-16">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">
            Logo Alanı Tasarım Testi
          </h1>
          <p className="mt-2 max-w-2xl text-text-secondary">
            Ana sayfadaki üye logoları alanı için 4 alternatif. Tümü gerçek
            (normalize edilmiş) logolarla çalışıyor; beğendiğiniz tasarımın
            numarasını iletmeniz yeterli.
          </p>
        </div>

        {VARIANTS.map((v) => (
          <section key={v.id}>
            <h2 className="text-xl font-semibold text-text-primary">{v.title}</h2>
            <p className="mb-4 mt-1 text-sm text-text-secondary">{v.description}</p>
            <div className="rounded-2xl border border-border/60 bg-surface/30 px-2 sm:px-4">
              <LogoMarquee variant={v.id} />
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
