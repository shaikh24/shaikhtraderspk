import { useEffect, useRef } from "react";

export function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
}: {
  as?: any;
  delay?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (el as HTMLElement).style.transitionDelay = `${delay}ms`;
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return (
    <Tag ref={ref as any} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}