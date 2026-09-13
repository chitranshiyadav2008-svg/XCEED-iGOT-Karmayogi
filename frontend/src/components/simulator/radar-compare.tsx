import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { COMPETENCIES, type SkillState } from "@/lib/simulator-calc";

interface Props {
  values: SkillState;
  baseline: SkillState;
}

export function RadarCompare({ values, baseline }: Props) {
  const data = COMPETENCIES.map((c) => ({
    competency: c.label,
    Current: baseline[c.id],
    Simulated: values[c.id],
  }));

  return (
    <div className="surface-card flex h-full flex-col p-5 sm:p-6">
      <div>
        <h2 className="text-lg font-semibold text-foreground">Skill Twin Comparison</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Current Skill Twin vs simulated projection across six competencies.
        </p>
      </div>

      <div className="mt-4 h-[320px] w-full sm:h-[380px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data} outerRadius="72%">
            <PolarGrid stroke="var(--color-border)" />
            <PolarAngleAxis
              dataKey="competency"
              tick={{ fill: "var(--color-muted-foreground)", fontSize: 11 }}
            />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 100]}
              tick={{ fill: "var(--color-muted-foreground)", fontSize: 10 }}
              axisLine={false}
            />
            <Tooltip
              contentStyle={{
                background: "var(--color-popover)",
                border: "1px solid var(--color-border)",
                borderRadius: "0.75rem",
                fontSize: "12px",
                color: "var(--color-popover-foreground)",
              }}
            />
            <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "8px" }} />
            <Radar
              name="Current Skill Twin"
              dataKey="Current"
              stroke="var(--color-muted-foreground)"
              fill="var(--color-muted-foreground)"
              fillOpacity={0.12}
              strokeDasharray="4 4"
            />
            <Radar
              name="Simulated Skill Twin"
              dataKey="Simulated"
              stroke="var(--color-primary)"
              fill="var(--color-primary)"
              fillOpacity={0.32}
              isAnimationActive
              animationDuration={450}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
