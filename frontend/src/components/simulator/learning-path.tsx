import { BookOpen, Check, Clock, Plus, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Course } from "@/lib/simulator-calc";

interface Props {
  courses: Course[];
  planned: string[];
  onToggle: (courseId: string) => void;
}

export function LearningPathPreview({ courses, planned, onToggle }: Props) {
  return (
    <div className="surface-card p-5 sm:p-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Recommended Learning Path</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Curated for your simulated priorities across MoSPI and iGOT catalogues.
          </p>
        </div>
        <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary">
          {planned.length} in plan
        </span>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-3">
        {courses.map((course) => {
          const added = planned.includes(course.id);
          return (
            <article
              key={course.id}
              className="flex flex-col rounded-xl border border-border bg-secondary/40 p-4 transition-shadow hover:shadow-md"
            >
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium">
                <span className="rounded-full bg-card px-2 py-0.5 text-muted-foreground">
                  {course.provider}
                </span>
                <span className="rounded-full bg-accent-soft px-2 py-0.5 text-accent-foreground">
                  {course.level}
                </span>
              </div>

              <h3 className="mt-3 text-base font-semibold leading-snug text-foreground">
                {course.title}
              </h3>

              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Clock className="size-3.5" aria-hidden="true" /> {course.hours}
                </span>
                <span className="inline-flex items-center gap-1 font-medium text-success">
                  <TrendingUp className="size-3.5" aria-hidden="true" /> {course.impact}
                </span>
              </div>

              <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground">
                {course.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-1.5">
                    <BookOpen className="mt-0.5 size-3.5 shrink-0 text-primary" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>

              <Button
                type="button"
                variant={added ? "default" : "outline"}
                size="sm"
                className="mt-4 w-full"
                onClick={() => onToggle(course.id)}
                aria-pressed={added}
              >
                {added ? <Check className="size-4" /> : <Plus className="size-4" />}
                {added ? "Added to Plan" : "Add to Plan"}
              </Button>
            </article>
          );
        })}
      </div>
    </div>
  );
}
