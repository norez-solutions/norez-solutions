"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerGroup, StaggerItem } from "./motion/reveal";

const features = [
  "Local discovery",
  "Events & RSVPs",
  "Neighbor connections",
  "AI-powered recommendations",
];

export function Flagship() {
  return (
    <section id="flagship" className="px-6 py-16 sm:py-20">
      <Reveal direction="scale">
        <div className="glow-ring glass relative mx-auto max-w-3xl overflow-hidden rounded-3xl p-10 text-center sm:p-16">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent-cyan/20 blur-[100px]" />

          <span className="relative inline-flex items-center gap-2 rounded-full border border-[var(--border-glass)] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-foreground-muted">
            Currently building
          </span>

          <h3 className="relative mt-6 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Community <span className="text-gradient">Copilot</span>
          </h3>

          <p className="relative mx-auto mt-6 max-w-xl text-lg leading-8 text-foreground-muted">
            A platform designed to bring communities together — discover
            what&apos;s happening locally, join conversations, connect with
            neighbors, find local services, complete neighborhood missions,
            and raise petitions for the things that matter. Under the hood,
            AI helps surface what matters most to each neighborhood, right
            when it matters.
          </p>

          <StaggerGroup className="relative mx-auto mt-8 grid max-w-md grid-cols-1 gap-3 text-left sm:grid-cols-2">
            {features.map((feature) => (
              <StaggerItem key={feature} className="h-full">
                <div className="flex h-full min-h-[4.5rem] items-center gap-2.5 rounded-xl border border-[var(--border-glass)] bg-white/[0.02] px-4 text-sm text-foreground-muted">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
                  {feature}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-2 rounded-full bg-accent-violet/10 px-4 py-2 text-sm font-medium text-accent-violet"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent-violet" />
              Coming soon
            </motion.span>

            <a
              href="https://www.community-copilot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent-cyan transition-colors duration-300 hover:text-accent-violet"
            >
              community-copilot.com
              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
