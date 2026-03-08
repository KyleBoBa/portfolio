import { ProjectPage } from "@/components/ProjectPage";

const FEATURES = [
  "REPL loop — reads a line, parses it, executes, prints output, repeats",
  "builtin commands: echo, cd, pwd, exit, type (resolves whether a command is a builtin or an external binary)",
  "external program execution: resolves binaries from PATH and spawns them as subprocesses",
  "command argument parsing handles quoted strings and basic whitespace splitting",
  "POSIX-compliant exit codes passed through from child processes",
];

export default function Shell() {
  return (
    <ProjectPage
      name="shell."
      tagline="a POSIX-compliant shell built from scratch in Python — CodeCrafters challenge"
      tags={["python", "systems", "codecrafters"]}
      githubUrl="https://github.com/KyleBoBa/shell-python"
      sections={[
        {
          title: "overview",
          content: (
            <p
              className="text-[1rem] leading-[1.85]"
              style={{ color: "var(--ws-ink)", fontFamily: "var(--font-space-mono), monospace" }}
            >
              A CodeCrafters challenge: implement a working shell in Python, stage by stage.
              The exercise is useful because shells are one of those tools you use every day
              without thinking about the machinery underneath — the REPL, the PATH lookup,
              the fork-exec model, the difference between a builtin and a binary. Building one
              from scratch makes all of that concrete.
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
          title: "notes",
          content: (
            <p
              className="text-[1rem] leading-[1.85]"
              style={{ color: "var(--ws-ink)", fontFamily: "var(--font-space-mono), monospace" }}
            >
              The most interesting part is the{" "}
              <code
                className="rounded px-1.5 py-0.5 text-sm"
                style={{ backgroundColor: "rgba(46,61,38,0.10)", color: "var(--ws-sage)" }}
              >
                type
              </code>{" "}
              builtin — it needs to introspect the shell&apos;s own command registry and compare
              against PATH-resolved binaries. Getting that right required thinking carefully about
              lookup order and what &quot;builtin&quot; actually means from the shell&apos;s perspective.
              subprocess + os.environ[&quot;PATH&quot;] handles the external execution side.
            </p>
          ),
        },
      ]}
    />
  );
}
