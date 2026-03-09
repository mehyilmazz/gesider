import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "accent" | "outline";
  className?: string;
}

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
        {
          "bg-surface-elevated text-text-secondary border border-border":
            variant === "default",
          "bg-primary/15 text-primary": variant === "primary",
          "bg-accent/15 text-accent": variant === "accent",
          "border border-border text-text-muted": variant === "outline",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
