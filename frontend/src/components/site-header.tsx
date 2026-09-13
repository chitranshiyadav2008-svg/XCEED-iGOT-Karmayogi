import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Compass, Menu, X } from "lucide-react";
import { DEMO_USER } from "@/lib/simulator-calc";

const NAV = [
  "Dashboard",
  "Competency Framework",
  "What-If Simulator",
  "Learning Paths",
  "Profile",
];

const ACTIVE = "What-If Simulator";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <Compass className="size-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold tracking-tight text-foreground">
              SkillSaarthi
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Government of India · iGOT
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV.map((item) => (
            <span
              key={item}
              aria-current={item === ACTIVE ? "page" : undefined}
              className={
                "cursor-pointer rounded-lg px-3 py-2 text-sm font-medium transition-colors " +
                (item === ACTIVE
                  ? "bg-primary-soft text-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground")
              }
            >
              {item}
            </span>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2.5 rounded-full border border-border bg-card py-1.5 pl-1.5 pr-4 shadow-sm sm:flex">
            <span className="flex size-8 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
              {DEMO_USER.initials}
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold text-foreground">{DEMO_USER.name}</span>
              <span className="block text-[11px] text-muted-foreground">{DEMO_USER.role}</span>
            </span>
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            className="flex size-9 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="animate-fade-in border-t border-border bg-card px-4 py-3 lg:hidden" aria-label="Mobile">
          {NAV.map((item) => (
            <span
              key={item}
              className={
                "block rounded-lg px-3 py-2 text-sm font-medium " +
                (item === ACTIVE ? "bg-primary-soft text-primary" : "text-muted-foreground")
              }
            >
              {item}
            </span>
          ))}
          <div className="mt-2 border-t border-border pt-3 text-sm sm:hidden">
            <p className="font-semibold text-foreground">{DEMO_USER.name}</p>
            <p className="text-xs text-muted-foreground">{DEMO_USER.role}</p>
          </div>
        </nav>
      )}
    </header>
  );
}
