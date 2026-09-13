import { RotateCcw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { COMPETENCIES, PRESETS, type SkillState } from "@/lib/simulator-calc";

interface Props {
  values: SkillState;
  baseline: SkillState;
  activePreset: string | null;
  onChange: (id: keyof SkillState, value: number) => void;
  onPreset: (presetId: string) => void;
}

export function SliderPanel({ values, baseline, activePreset, onChange, onPreset }: Props) {
  return (
    <div className="surface-card p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Adjust Your Competencies</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Drag a slider or pick a scenario to model future learning outcomes.
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary">
          <Sparkles className="size-3.5" aria-hidden="true" /> Estimates only
        </span>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {PRESETS.map((p) => {
          const isReset = p.id === "reset";
          const active = activePreset === p.id;
          return (
            <Button
              key={p.id}
              type="button"
              size="sm"
              variant={active ? "default" : isReset ? "ghost" : "outline"}
              title={p.description}
              onClick={() => onPreset(p.id)}
              className="rounded-full transition-transform active:scale-95"
            >
              {isReset && <RotateCcw className="size-3.5" aria-hidden="true" />}
              {p.label}
            </Button>
          );
        })}
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {COMPETENCIES.map((c) => {
          const value = values[c.id];
          const delta = value - baseline[c.id];
          return (
            <div key={c.id}>
              <div className="flex items-baseline justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold text-foreground">{c.label}</p>
                  <p className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                    {c.category}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {delta !== 0 && (
                    <span
                      className={
                        "rounded-full px-2 py-0.5 text-[11px] font-semibold " +
                        (delta > 0
                          ? "bg-success-soft text-success"
                          : "bg-destructive/10 text-destructive")
                      }
                    >
                      {delta > 0 ? "+" : ""}
                      {delta} pts
                    </span>
                  )}
                  <span className="font-display text-lg font-semibold tabular-nums text-primary">
                    {value}
                  </span>
                </div>
              </div>

              <Slider
                className="mt-3"
                value={[value]}
                min={0}
                max={100}
                step={1}
                aria-label={`${c.label} simulated level`}
                onValueChange={(v) => onChange(c.id, v[0] ?? value)}
              />

              <div className="relative mt-2 h-4">
                <span
                  className="absolute top-0 -translate-x-1/2 text-[10px] text-muted-foreground"
                  style={{ left: `${baseline[c.id]}%` }}
                >
                  ▲ {baseline[c.id]}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
