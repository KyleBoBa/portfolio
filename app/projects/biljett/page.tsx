import { ProjectPage } from "@/components/ProjectPage";

const FEATURES = [
  "input: number of days OR a date range with optional weekday-only filtering",
  "supports two ticket categories: adult (vuxen) and discount (student / senior)",
  "evaluates all SL ticket types: single trip, 24h, 72h, 7-day, 30-day, 90-day, annual",
  "dynamic programming finds the globally optimal combination — not just greedy picks",
  "outputs the exact tickets to buy, their count, and how many days they cover in total",
];

export default function Biljett() {
  return (
    <ProjectPage
      name="biljett."
      tagline="finds the cheapest SL ticket combination for any travel period using dynamic programming"
      tags={["python"]}
      githubUrl="https://github.com/KyleBoBa/Biljett"
      sections={[
        {
          title: "overview",
          content: (
            <p
              className="text-[1rem] leading-[1.85]"
              style={{ color: "var(--ws-ink)", fontFamily: "var(--font-space-mono), monospace" }}
            >
              SL (Stockholm&apos;s public transit) sells tickets at several durations — and the cheapest
              option for a given trip period is not always obvious. A 7-day pass might be cheaper
              than seven 24h passes, but a mix of a 72h and a 24h might beat both. I built this
              tool because I kept doing the mental arithmetic wrong. It frames the problem as a
              variant of the classic coin-change problem and solves it optimally with DP.
            </p>
          ),
        },
        {
          title: "what it does",
          content: (
            <ul className="space-y-3">
              {FEATURES.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-[0.95rem]"
                  style={{ color: "var(--ws-ink)", lineHeight: 1.8, fontFamily: "var(--font-space-mono), monospace" }}
                >
                  <span style={{ color: "var(--ws-sage-muted)", flexShrink: 0, marginTop: 3 }}>—</span>
                  {f}
                </li>
              ))}
            </ul>
          ),
        },
        {
          title: "approach",
          content: (
            <p
              className="text-[1rem] leading-[1.85]"
              style={{ color: "var(--ws-ink)", fontFamily: "var(--font-space-mono), monospace" }}
            >
              Each ticket type maps to a duration (days covered) and a cost. The DP table tracks
              the minimum cost to cover every number of days from 0 up to a safe maximum, with
              backpointing for reconstruction. The final answer is the minimum over all entries
              that cover at least the requested number of days — allowing for the fact that some
              tickets overshoot (a 7-day pass still makes sense if you only need 6 days).
            </p>
          ),
        },
      ]}
    />
  );
}
