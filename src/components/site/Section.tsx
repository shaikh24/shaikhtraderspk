import { cn } from "@/lib/utils";

export function Section({
  eyebrow,
  title,
  subtitle,
  className,
  children,
  id,
  center,
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  id?: string;
  center?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("container-px mx-auto max-w-7xl py-20 sm:py-28", className)}>
      {(eyebrow || title || subtitle) && (
        <div className={cn("mb-12 max-w-2xl", center && "mx-auto text-center")}>
          {eyebrow && (
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-gradient-gold">
              {eyebrow}
            </span>
          )}
          {title && <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">{title}</h2>}
          {subtitle && <p className="mt-4 text-base sm:text-lg text-muted-foreground">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}