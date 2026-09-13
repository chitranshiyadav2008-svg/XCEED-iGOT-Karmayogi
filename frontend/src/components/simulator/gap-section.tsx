import { CheckCircle2 } from "lucide-react";
import type { SimulationResult } from "@/lib/simulator-calc";

export function GapSection({ result }: { result: SimulationResult }) {
  return (
    <div className="surface-card p-5 sm:p-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Skill Gap — Before vs After</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Baseline, simulated level and the role benchmark for a Statistical Investigator.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-muted-foreground/50" /> Baseline
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-primary" /> Simulated
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-3 w-0.5 bg-accent" /> Benchmark
          </span>
        </div>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {result.gaps.map((g) => (
          <div key={g.id} className="rounded-xl border border-border bg-secondary/40 p-4">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-sm font-semibold text-foreground">{g.label}</p>
                <p className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                  {g.category}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold tabular-nums text-foreground">
                  {g.before} <span className="text-muted-foreground">→</span> {g.after}
                </p>
                {g.meetsBenchmark ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-success">
                    <CheckCircle2 className="size-3" aria-hidden="true" /> Meets benchmark
                  </span>
                ) : (
                  <span className="text-[11px] text-muted-foreground">
                    {g.benchmark - g.after} pts to benchmark
                  </span>
                )}
              </div>
            </div>

            <div className="mt-3 space-y-2">
              <div className="relative h-2 overflow-hidden rounded-full bg-background">
                <div
                  className="h-full rounded-full bg-muted-foreground/40 transition-all duration-500"
                  style={{ width: `${g.before}%` }}
                />
              </div>
              <div className="relative h-2.5 overflow-hidden rounded-full bg-background">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-500"
                  style={{ width: `${g.after}%` }}
                />
              </div>
              <div className="relative h-3">
                <span
                  className="absolute top-0 h-3 w-0.5 -translate-x-1/2 bg-accent"
                  style={{ left: `${g.benchmark}%` }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
