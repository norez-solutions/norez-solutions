"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-foreground-muted"
      >
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-cyan" />
        Norez Solutions
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.15, ease: EASE }}
        className="mt-8 max-w-4xl text-balance font-display text-5xl font-semibold tracking-tight sm:text-7xl"
      >
        We&apos;re building{" "}
        <span className="text-gradient">what&apos;s next.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
        className="mt-6 max-w-xl text-lg leading-8 text-foreground-muted"
      >
        Norez Solutions is a technology company focused on creating
        thoughtful digital products that bring people, businesses, and
        communities together.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
      >
        <a
          href="#flagship"
          className="group relative mt-10 inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet px-9 text-base font-semibold text-background shadow-[0_0_40px_-8px_rgba(34,211,238,0.6)] transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_60px_-6px_rgba(139,92,246,0.7)] active:scale-95"
        >
          See what we&apos;re building
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-foreground-muted"
      >
        <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-5 items-start justify-center rounded-full border border-[var(--border-glass)] p-1"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
        </motion.div>
      </motion.div>
    </section>
  );
}
