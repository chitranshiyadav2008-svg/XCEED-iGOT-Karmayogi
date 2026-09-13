import { useState } from "react";
import { CalendarClock, RotateCcw, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Course, SimulationResult } from "@/lib/simulator-calc";

interface Props {
  result: SimulationResult;
  courses: Course[];
  planned: string[];
  onReset: () => void;
}

export function ActionBar({ result, courses, planned, onReset }: Props) {
  const [open, setOpen] = useState(false);
  const selected = courses.filter((c) => planned.includes(c.id));
  const plan = selected.length > 0 ? selected : courses;
  const totalHours = plan.reduce((sum, c) => sum + parseInt(c.hours, 10), 0);
  const weeks = Math.max(4, Math.ceil(totalHours / 3));

  return (
    <>
      <div className="surface-card flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Ready to act on this scenario?</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Turn your simulated Skill Twin into a sequenced learning plan.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button type="button" onClick={() => setOpen(true)} className="sm:min-w-56">
            <Sparkles className="size-4" aria-hidden="true" /> Generate My Learning Path
          </Button>
          <Button type="button" variant="outline" onClick={onReset}>
            <RotateCcw className="size-4" aria-hidden="true" /> Reset Simulation
          </Button>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Your simulated growth plan</DialogTitle>
            <DialogDescription>
              Estimated readiness {result.baselineReadiness}% → {result.readiness}% (
              {result.delta >= 0 ? "+" : ""}
              {result.delta} pts) for a Statistical Investigator.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3">
            {plan.map((c, i) => (
              <div key={c.id} className="rounded-xl border border-border bg-secondary/40 p-3">
                <p className="text-xs font-medium text-muted-foreground">
                  Step {i + 1} · {c.provider}
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">{c.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {c.hours} · {c.impact}
                </p>
              </div>
            ))}

            <p className="inline-flex items-center gap-2 rounded-lg bg-primary-soft px-3 py-2 text-sm text-primary">
              <CalendarClock className="size-4" aria-hidden="true" />
              Estimated completion in ~{weeks} weeks at 3 hrs/week ({totalHours} hrs total).
            </p>
            <p className="text-xs text-muted-foreground">
              All figures are simulated estimates for planning, not guaranteed outcomes.
            </p>
          </div>

          <DialogFooter>
            <Button
              type="button"
              onClick={() => {
                setOpen(false);
                toast.success("Learning path generated", {
                  description: `${plan.length} courses queued · estimated ${weeks} weeks.`,
                });
              }}
            >
              Confirm &amp; Save Plan
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
