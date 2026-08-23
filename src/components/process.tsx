import { Reveal, StaggerGroup, StaggerItem } from "./motion/reveal";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding the real problem people have, not the feature we want to build.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We map out simple, intuitive experiences before a single line of code gets written.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We build fast on solid foundations, so what ships today still holds up next year.",
  },
  {
    number: "04",
    title: "Ship & iterate",
    description:
      "We get real products in front of real people early, then keep refining from there.",
  },
];

export function Process() {
  return (
    <section id="process" className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <h2 className="text-sm font-medium uppercase tracking-[0.3em] text-foreground-muted">
            How we work
          </h2>
          <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            From idea to <span className="text-gradient">shipped product.</span>
          </h3>
        </Reveal>

        <StaggerGroup className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-4 sm:gap-6">
          <div className="pointer-events-none absolute left-6 top-6 hidden h-px w-[calc(100%-3rem)] bg-gradient-to-r from-accent-cyan via-accent-violet to-accent-magenta sm:block" />

          {steps.map(({ number, title, description }) => (
            <StaggerItem key={number}>
              <div className="relative">
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-glass)] bg-background font-mono text-sm text-accent-cyan">
                  {number}
                </span>
                <h4 className="mt-4 font-display text-lg font-medium">
                  {title}
                </h4>
                <p className="mt-2 text-sm leading-6 text-foreground-muted">
                  {description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
