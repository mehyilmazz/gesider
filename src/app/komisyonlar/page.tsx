"use client";

import {
  FlaskConical,
  CalendarDays,
  Bell,
  Globe,
  Newspaper,
  GraduationCap,
  Users,
  Scale,
} from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import Accordion from "@/components/ui/Accordion";
import { commissions } from "@/data/commissions";

const iconMap: Record<string, React.ReactNode> = {
  FlaskConical: <FlaskConical className="w-5 h-5" />,
  CalendarDays: <CalendarDays className="w-5 h-5" />,
  Bell: <Bell className="w-5 h-5" />,
  Globe: <Globe className="w-5 h-5" />,
  Newspaper: <Newspaper className="w-5 h-5" />,
  GraduationCap: <GraduationCap className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Scale: <Scale className="w-5 h-5" />,
};

export default function KomisyonlarPage() {
  const items = commissions.map((c) => ({
    id: c.id,
    title: c.name,
    icon: iconMap[c.icon],
    content: (
      <div className="space-y-4">
        <p>{c.description}</p>
        <div>
          <h4 className="text-sm font-semibold text-text-primary mb-2">
            Görev ve Sorumluluklar
          </h4>
          <ul className="space-y-2">
            {c.duties.map((duty, i) => (
              <li key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>{duty}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  }));

  return (
    <>
      <PageHeader
        title="Komisyonlar"
        description="Sektörün farklı alanlarında uzmanlaşmış 8 komisyonumuz ile çalışmalarımızı sürdürüyoruz."
      />
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <Accordion items={items} />
        </div>
      </section>
    </>
  );
}
