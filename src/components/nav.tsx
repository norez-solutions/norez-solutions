"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const links = [
  { href: "#what-we-do", label: "What We Do" },
  { href: "#process", label: "Approach" },
  { href: "#flagship", label: "Flagship" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        open
          ? "border-[var(--border-glass)] bg-background-elevated"
          : scrolled
            ? "border-[var(--border-glass)] bg-background/85 backdrop-blur-xl"
            : "border-transparent bg-background/40 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="font-display text-lg font-semibold tracking-tight text-foreground"
        >
          Norez<span className="text-gradient">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm font-medium text-foreground-muted transition-colors duration-300 hover:text-foreground"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-accent-cyan to-accent-violet transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full border border-[var(--border-glass)] px-5 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:scale-105 hover:border-accent-cyan/60 hover:shadow-[0_0_24px_-4px_rgba(34,211,238,0.5)] md:inline-flex"
        >
          Get in touch
        </a>

        <button
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
        >
          <div className="relative h-4 w-6">
            <motion.span
              initial={false}
              animate={open ? { top: 7.5, rotate: 45 } : { top: 0, rotate: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-0 h-px w-6 bg-foreground"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-[7.5px] h-px w-6 bg-foreground"
            />
            <motion.span
              initial={false}
              animate={open ? { top: 7.5, rotate: -45 } : { top: 15, rotate: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-0 h-px w-6 bg-foreground"
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-[var(--border-glass)] bg-background-elevated md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-foreground-muted transition-colors hover:bg-white/5 hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 block rounded-full bg-gradient-to-r from-accent-cyan to-accent-violet px-4 py-3 text-center text-sm font-semibold text-background"
                >
                  Get in touch
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
