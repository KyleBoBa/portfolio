import { ProjectPage } from "@/components/ProjectPage";

const FEATURES = [
  "search any movie by title — results pulled live from an external movie API",
  "movie cards display title, release year, poster, and a short synopsis",
  "add or remove movies from a favorites list with a single click",
  "favorites page persists across navigation via react context — no backend needed",
  "client-side routing between home and favorites with react router",
];

export default function MovieSearch() {
  return (
    <ProjectPage
      name="movie search."
      tagline="search, browse, and save movies — a react SPA built with Vite"
      tags={["react", "javascript", "vite", "react router", "context api", "css"]}
      githubUrl="https://github.com/KyleBoBa/movie-search"
      sections={[
        {
          title: "overview",
          content: (
            <p
              className="text-[1rem] leading-[1.85]"
              style={{ color: "rgba(240,240,232,0.76)" }}
            >
              A frontend-only web app for browsing movies. You type a title, it fetches matching
              results from a movie database API, and displays them as cards. The main purpose was
              to get comfortable with React&apos;s Context API as a lightweight alternative to
              Redux for shared state — in this case, a favorites list that needs to be accessible
              from both the search page and the favorites page without prop drilling.
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
          title: "notes",
          content: (
            <p
              className="text-[1rem] leading-[1.85]"
              style={{ color: "rgba(240,240,232,0.76)" }}
            >
              Straightforward project, but useful for practicing the React mental model — lifting
              state, context providers, and the separation between presentational components
              (MovieCard) and page-level logic. Vite made the dev loop fast. Built with plain CSS
              modules rather than a utility framework to keep the styling explicit.
            </p>
          ),
        },
      ]}
    />
  );
}
