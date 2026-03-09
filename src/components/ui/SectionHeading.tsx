import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-5 lg:mb-6",
        align === "center" && "text-center",
        className
      )}
    >
      {badge && (
        <span className="mb-2 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary",
          align === "center" && "max-w-3xl mx-auto"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-2 text-lg text-text-secondary",
            align === "center" && "max-w-2xl mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
