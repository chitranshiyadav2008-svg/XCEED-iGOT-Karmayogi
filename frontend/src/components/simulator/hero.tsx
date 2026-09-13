import { ArrowRight, BrainCircuit, GraduationCap, Info, Layers, Sparkles } from "lucide-react";
import { DEMO_USER } from "@/lib/simulator-calc";

const FLOW = [
  { label: "Skills", icon: Layers },
  { label: "Learning", icon: GraduationCap },
  { label: "AI Simulation", icon: BrainCircuit },
  { label: "Future Skill Twin", icon: Sparkles },
];

export function SimulatorHero({ readiness }: { readiness: number }) {
  return (
    <section className="hero-gradient relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-accent/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <nav aria-label="Breadcrumb" className="text-xs font-medium text-primary-foreground/70">
          Dashboard <span className="px-1">/</span> Capacity Building
          <span className="px-1">/</span>
          <span className="text-primary-foreground">What-If Simulator</span>
        </nav>

        <div className="mt-4 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
          <div>
            <h1 className="max-w-2xl text-3xl font-semibold text-primary-foreground sm:text-4xl lg:text-5xl">
              What-If Learning Simulator
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
              Simulate how targeted skill development transforms your AI Skill Twin and role
              readiness for {DEMO_USER.role}.
            </p>

            <ol className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-3">
              {FLOW.map((step, i) => (
                <li key={step.label} className="flex items-center gap-2">
                  <span className="flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1.5 text-xs font-medium text-primary-foreground backdrop-blur-sm sm:text-sm">
                    <step.icon className="size-4 text-accent" aria-hidden="true" />
                    {step.label}
                  </span>
                  {i < FLOW.length - 1 && (
                    <ArrowRight className="size-4 text-primary-foreground/50" aria-hidden="true" />
                  )}
                </li>
              ))}
            </ol>

            <p className="mt-6 inline-flex items-start gap-2 rounded-lg bg-primary-foreground/10 px-3 py-2 text-xs text-primary-foreground/80">
              <Info className="mt-px size-4 shrink-0 text-accent" aria-hidden="true" />
              Simulated estimates for career planning &amp; learning path customization — not
              guaranteed predictions.
            </p>
          </div>

          <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-5 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                {DEMO_USER.initials}
              </span>
              <div>
                <p className="font-display text-base font-semibold text-primary-foreground">
                  {DEMO_USER.name}
                </p>
                <p className="text-xs text-primary-foreground/70">{DEMO_USER.role}</p>
              </div>
            </div>
            <div className="mt-5">
              <p className="text-[11px] uppercase tracking-[0.14em] text-primary-foreground/60">
                Current Skill Twin Estimate
              </p>
              <p className="mt-1 font-display text-4xl font-semibold text-primary-foreground">
                {readiness}
                <span className="text-2xl">%</span>
              </p>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-primary-foreground/20">
                <div
                  className="accent-gradient h-full rounded-full transition-all duration-700"
                  style={{ width: `${readiness}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-primary-foreground/70">Role readiness baseline</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
