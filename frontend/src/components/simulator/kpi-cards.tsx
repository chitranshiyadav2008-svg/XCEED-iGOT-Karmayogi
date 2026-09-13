import { ArrowUpRight, Gauge, Rocket, Trophy, TrendingUp } from "lucide-react";
import { useCountUp } from "@/hooks/use-count-up";
import type { SimulationResult } from "@/lib/simulator-calc";

function DeltaBadge({ value, suffix = "%" }: { value: number; suffix?: string }) {
  if (value === 0) {
    return (
      <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] font-semibold text-muted-foreground">
        No change
      </span>
    );
  }
  const positive = value > 0;
  return (
    <span
      className={
        "inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-[11px] font-semibold " +
        (positive ? "bg-success-soft text-success" : "bg-destructive/10 text-destructive")
      }
    >
      <ArrowUpRight className={"size-3 " + (positive ? "" : "rotate-90")} aria-hidden="true" />
      {positive ? "+" : ""}
      {value}
      {suffix}
    </span>
  );
}

export function KpiCards({ result }: { result: SimulationResult }) {
  const readiness = useCountUp(result.readiness);
  const strongest = useCountUp(result.strongestSkill.value);
  const improvement = useCountUp(result.biggestImprovement.delta);
  const growth = useCountUp(result.growthPotential);

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <div className="surface-card p-5">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
            <Gauge className="size-4 text-primary" aria-hidden="true" /> Role Readiness
          </span>
          <DeltaBadge value={result.delta} />
        </div>
        <p className="mt-3 font-display text-3xl font-semibold text-foreground tabular-nums">
          {result.baselineReadiness}% <span className="text-muted-foreground">→</span> {readiness}%
        </p>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500"
            style={{ width: `${readiness}%` }}
          />
        </div>
        <p className="mt-2 text-xs text-muted-foreground">Estimated, based on role benchmarks</p>
      </div>

      <div className="surface-card p-5">
        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
          <Trophy className="size-4 text-accent" aria-hidden="true" /> Strongest Skill
        </span>
        <p className="mt-3 font-display text-xl font-semibold text-foreground">
          {result.strongestSkill.label}
        </p>
        <p className="mt-1 text-3xl font-semibold tabular-nums text-accent">{strongest}</p>
        <p className="mt-2 text-xs text-muted-foreground">Highest simulated competency level</p>
      </div>

      <div className="surface-card p-5">
        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
          <TrendingUp className="size-4 text-success" aria-hidden="true" /> Biggest Improvement
        </span>
        <p className="mt-3 font-display text-xl font-semibold text-foreground">
          {result.biggestImprovement.label}
        </p>
        <p className="mt-1 text-3xl font-semibold tabular-nums text-success">
          {improvement > 0 ? `+${improvement}` : improvement} pts
        </p>
        <p className="mt-2 text-xs text-muted-foreground">Largest gain vs your baseline</p>
      </div>

      <div className="surface-card p-5">
        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
          <Rocket className="size-4 text-primary" aria-hidden="true" /> Growth Potential
        </span>
        <p className="mt-3 text-3xl font-semibold tabular-nums text-foreground">{growth} pts</p>
        <p className="mt-1 text-sm font-medium text-primary">{result.trajectory}</p>
        <p className="mt-2 text-xs text-muted-foreground">Headroom left to full readiness</p>
      </div>
    </div>
  );
}
