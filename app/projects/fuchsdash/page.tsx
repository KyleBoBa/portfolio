import { ProjectPage } from "@/components/ProjectPage";

const FEATURES = [
  "real-time visualization of sample flow across the process pipeline — charts update as new readings come in",
  "python ingestion service reads from the proprietary FUCHS DB and pushes normalized records into postgres",
  "next.js api routes backed by prisma ORM provide type-safe access to all data",
  "microsoft OAuth authentication via Auth.js — access scoped to the research group",
  "full docker compose setup: database, python backend, and next.js frontend run in isolated containers",
  "process management interface lets operators log interventions and annotate data runs",
];

export default function FuchsDash() {
  return (
    <ProjectPage
      name="project fuchs."
      tagline="real-time sample flow dashboard for a chemical process research lab at KTH"
      tags={["next.js", "typescript", "postgres", "docker", "prisma", "tailwind", "python"]}
      sections={[
        {
          title: "overview",
          content: (
            <p
              className="text-[1rem] leading-[1.85]"
              style={{ color: "rgba(240,240,232,0.76)" }}
            >
              Built for FUCHS SE, as part of the course DD1367, this system monitors and visualizes the real-time
              flow of chemical samples through a lab process pipeline. A Python service reads sensor
              data from a proprietary laboratory database (FUCHS DB), normalizes the records, and
              pushes them into a PostgreSQL database. The Next.js frontend polls for updates and
              renders the data as interactive charts and process tables — giving researchers a live
              view of what&apos;s happening on the production floor and QC lab without touching any instrumentation software.
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
                  style={{ color: "rgba(240,240,232,0.7)", lineHeight: 1.8 }}
                >
                  <span style={{ color: "rgba(240,240,232,0.25)", flexShrink: 0, marginTop: 3 }}>—</span>
                  {f}
                </li>
              ))}
            </ul>
          ),
        },
        {
          title: "architecture",
          content: (
            <p
              className="text-[1rem] leading-[1.85]"
              style={{ color: "rgba(240,240,232,0.76)" }}
            >
              Four-layer stack: FUCHS DB (proprietary) → Python ingestion service → PostgreSQL →
              Next.js. The python layer abstracts away the lab database format so the rest of the
              stack only ever sees clean, typed records. Docker Compose ties everything together,
              making the full stack reproducible with a single command. Auth is handled by Auth.js
              with Microsoft as the OAuth provider, keeping access within the university tenant.
            </p>
          ),
        },
      ]}
    />
  );
}
