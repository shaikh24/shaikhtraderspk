import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Ship } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 16);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full gradient-gold shadow-gold">
            <Ship className="h-5 w-5 text-navy-deep" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-wide text-foreground">{SITE.short}</span>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Pvt. Ltd.</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="relative px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {({ isActive }) => (
                <>
                  {n.label}
                  <span
                    className={cn(
                      "absolute inset-x-3 -bottom-0.5 h-px gradient-gold transition-transform duration-300 origin-left",
                      isActive ? "scale-x-100" : "scale-x-0"
                    )}
                  />
                </>
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            to="/quote"
            className="hidden md:inline-flex items-center rounded-full gradient-gold px-5 py-2 text-sm font-semibold text-navy-deep shadow-gold hover:opacity-90 transition-opacity"
          >
            Request Quote
          </Link>
          <button
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <nav className="container-px mx-auto max-w-7xl py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="rounded-md px-3 py-2.5 text-sm font-medium hover:bg-muted">
                {n.label}
              </Link>
            ))}
            <Link to="/quote" className="mt-2 rounded-full gradient-gold px-5 py-2.5 text-center text-sm font-semibold text-navy-deep">
              Request Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}