import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { news } from "@/data/news";
import { formatDate } from "@/lib/utils";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { notFound } from "next/navigation";

const categoryLabels: Record<string, string> = {
  duyuru: "Duyuru",
  haber: "Haber",
  etkinlik: "Etkinlik",
  basin: "Basın",
};

export function generateStaticParams() {
  return news.map((item) => ({ slug: item.slug }));
}

export default async function HaberDetayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);

  if (!item) {
    notFound();
  }

  const relatedNews = news
    .filter((n) => n.id !== item.id && n.category === item.category)
    .slice(0, 2);

  return (
    <>
      <section className="relative pt-32 pb-8 lg:pt-40 lg:pb-12">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container-custom relative">
          <Link
            href="/haberler"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Tüm Haberler
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="primary">
              {categoryLabels[item.category]}
            </Badge>
            <span className="flex items-center gap-1.5 text-sm text-text-muted">
              <Calendar className="w-4 h-4" />
              {formatDate(item.date)}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary max-w-3xl">
            {item.title}
          </h1>
        </div>
      </section>

      <section className="section-padding pt-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card className="p-8 lg:p-10" hover={false}>
                <div className="prose prose-invert max-w-none">
                  <p className="text-text-secondary leading-relaxed text-lg">
                    {item.content}
                  </p>
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              {relatedNews.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-4">
                    İlgili Haberler
                  </h3>
                  <div className="space-y-3">
                    {relatedNews.map((n) => (
                      <Link
                        key={n.id}
                        href={`/haberler/${n.slug}`}
                        className="block p-4 rounded-xl border border-border bg-surface-elevated/40 hover:border-primary/30 hover:bg-surface-elevated/60 transition-all"
                      >
                        <Badge variant="outline" className="mb-2">
                          {categoryLabels[n.category]}
                        </Badge>
                        <h4 className="text-sm font-medium text-text-primary line-clamp-2">
                          {n.title}
                        </h4>
                        <p className="text-xs text-text-muted mt-1">
                          {formatDate(n.date)}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <Card className="p-6" hover={false}>
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="w-4 h-4 text-primary" />
                  <h3 className="text-sm font-semibold text-text-primary">
                    Kategoriler
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(categoryLabels).map(([key, label]) => (
                    <Link
                      key={key}
                      href={`/haberler?kategori=${key}`}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-surface border border-border text-text-muted hover:text-primary hover:border-primary/30 transition-all"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
