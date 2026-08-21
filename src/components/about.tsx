import { Reveal, StaggerGroup, StaggerItem } from "./motion/reveal";

const stats = [
  { label: "Founded", value: "2026" },
  { label: "Team", value: "Founder-led" },
  { label: "Flagship", value: "01" },
];

export function About() {
  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="text-sm font-medium uppercase tracking-[0.3em] text-foreground-muted">
            Who we are
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            A small team, <span className="text-gradient">building deliberately.</span>
          </h3>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-foreground-muted">
            Norez Solutions is founder-led and intentionally small. We design,
            build, and ship every product ourselves — no hand-offs, no
            bloated roadmaps. Just people building things they&apos;d
            genuinely want to use, and taking the time to get the details
            right before anything ships.
          </p>
        </Reveal>

        <StaggerGroup className="mx-auto mt-14 max-w-2xl divide-y divide-[var(--border-glass)] sm:grid sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map(({ label, value }) => (
            <StaggerItem key={label} direction="scale">
              <div className="flex items-center justify-between gap-4 py-4 sm:flex-col sm:justify-center sm:gap-1 sm:px-3 sm:py-0 sm:text-center">
                <p className="whitespace-nowrap font-mono text-xl font-semibold text-gradient sm:text-2xl">
                  {value}
                </p>
                <p className="whitespace-nowrap text-xs uppercase tracking-[0.2em] text-foreground-muted">
                  {label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
