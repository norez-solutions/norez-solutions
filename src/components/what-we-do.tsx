import { AiIcon, CommunityIcon, MobileIcon, WebIcon } from "./icons";
import { Reveal, StaggerGroup, StaggerItem } from "./motion/reveal";

const capabilities = [
  {
    icon: MobileIcon,
    title: "Mobile Applications",
    description:
      "Building intuitive mobile experiences that people actually enjoy using.",
    color: "#22d3ee",
    glow: "rgba(34,211,238,0.45)",
  },
  {
    icon: WebIcon,
    title: "Web Platforms",
    description:
      "Creating modern, scalable web applications and digital experiences.",
    color: "#3b82f6",
    glow: "rgba(59,130,246,0.45)",
  },
  {
    icon: CommunityIcon,
    title: "Community Technology",
    description:
      "Developing tools that help communities connect, communicate, and share information.",
    color: "#ec4899",
    glow: "rgba(236,72,153,0.45)",
  },
  {
    icon: AiIcon,
    title: "AI-Powered Experiences",
    description:
      "Exploring practical ways AI can make software more useful, accessible, and intelligent.",
    color: "#8b5cf6",
    glow: "rgba(139,92,246,0.45)",
  },
];

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-sm font-medium uppercase tracking-[0.3em] text-foreground-muted">
            What we&apos;re building
          </h2>
        </Reveal>

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {capabilities.map(({ icon: Icon, title, description, color, glow }) => (
            <StaggerItem key={title}>
              <div
                className="glass group h-full rounded-2xl p-8 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_20px_60px_-20px_var(--glow)]"
                style={{ ["--glow" as string]: glow }}
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-6"
                  style={{ backgroundColor: `${color}1a`, color }}
                >
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-display text-lg font-medium">
                  {title}
                </h3>
                <p className="mt-2 text-foreground-muted">{description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
