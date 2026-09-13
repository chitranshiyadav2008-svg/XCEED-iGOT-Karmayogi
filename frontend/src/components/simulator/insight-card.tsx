import { BrainCircuit, Dot } from "lucide-react";
import type { SimulationResult } from "@/lib/simulator-calc";

export function InsightCard({ result }: { result: SimulationResult }) {
  return (
    <div className="surface-card relative overflow-hidden p-5 sm:p-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-accent/15 blur-2xl"
      />
      <div className="relative">
        <div className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <BrainCircuit className="size-5" aria-hidden="true" />
          </span>
          <div>
            <h2 className="text-lg font-semibold text-foreground">AI Skill Twin Insight</h2>
            <p className="text-xs text-muted-foreground">
              Rule-based guidance, updates live as you adjust sliders
            </p>
          </div>
        </div>

        <ul className="mt-4 space-y-3">
          {result.insights.map((line) => (
            <li
              key={line}
              className="animate-fade-in flex gap-1 rounded-lg bg-secondary/60 p-3 text-sm leading-relaxed text-foreground"
            >
              <Dot className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
              <span>{line}</span>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-xs text-muted-foreground">
          These are simulated estimates for planning purposes, not guaranteed outcomes.
        </p>
      </div>
    </div>
  );
}
