import { Reveal, StaggerGroup, StaggerItem } from "./motion/reveal";

const principles = [
  {
    title: "Simple",
    description: "Technology should feel intuitive.",
    color: "#22d3ee",
  },
  {
    title: "Useful",
    description: "Every feature should solve a real problem.",
    color: "#8b5cf6",
  },
  {
    title: "Thoughtful",
    description:
      "We care about the details that turn an idea into a product people want to use.",
    color: "#ec4899",
  },
];

export function Approach() {
  return (
    <section id="approach" className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="text-sm font-medium uppercase tracking-[0.3em] text-foreground-muted">
            Built around real people
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-foreground-muted">
            We believe the best products start with real problems. Rather
            than building technology for the sake of technology, we focus on
            understanding how people communicate, connect, and interact —
            then build tools that make those experiences better.
          </p>
        </Reveal>

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {principles.map(({ title, description, color }) => (
            <StaggerItem key={title}>
              <div className="group">
                <div
                  className="mx-auto h-1 w-10 rounded-full transition-all duration-500 ease-out group-hover:w-16"
                  style={{ backgroundColor: color }}
                />
                <h3 className="mt-4 font-display text-xl font-medium">
                  {title}
                </h3>
                <p className="mt-2 text-foreground-muted">{description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.15} className="mt-20">
          <p className="mx-auto max-w-xl text-foreground-muted">
            Norez Solutions is an independent technology company at the
            beginning of its journey. We&apos;re early. We&apos;re building.
            This is only the beginning.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
