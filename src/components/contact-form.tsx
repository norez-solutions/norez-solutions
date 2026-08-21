"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { Reveal } from "./motion/reveal";

type Status = "idle" | "submitting" | "success";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    // Not wired to a real inbox yet — no email provider/domain configured.
    // Swap this for a POST to an API route (e.g. Resend) once one exists.
    await new Promise((resolve) => setTimeout(resolve, 1100));
    setStatus("success");
  }

  return (
    <section id="contact" className="px-6 py-32">
      <div className="mx-auto max-w-2xl">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Have an idea worth <span className="text-gradient">building?</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-foreground-muted">
            We&apos;re always interested in exploring interesting problems,
            ambitious ideas, and opportunities to build something useful.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-12">
          <div className="glass glow-ring relative overflow-hidden rounded-3xl p-8 sm:p-10">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="flex flex-col items-center gap-4 py-10 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.1,
                      type: "spring",
                      stiffness: 260,
                      damping: 18,
                    }}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-cyan/10 text-accent-cyan"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-8 w-8"
                    >
                      <motion.path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                      />
                    </svg>
                  </motion.div>
                  <h3 className="font-display text-xl font-medium">
                    Message sent
                  </h3>
                  <p className="max-w-sm text-foreground-muted">
                    Thanks for reaching out — we&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-sm font-medium text-accent-cyan transition-colors hover:text-accent-violet"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-6"
                >
                  <Field label="Name" name="name" type="text" required />
                  <Field label="Email" name="email" type="email" required />

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground-muted"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your idea..."
                      className="w-full resize-none rounded-xl border border-[var(--border-glass)] bg-white/[0.02] px-4 py-3 text-foreground outline-none transition-all duration-300 placeholder:text-foreground-muted/50 focus:border-accent-cyan/60 focus:shadow-[0_0_30px_-10px_rgba(34,211,238,0.5)]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group relative mt-2 inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet px-8 text-base font-semibold text-background shadow-[0_0_40px_-8px_rgba(34,211,238,0.6)] transition-transform duration-300 hover:scale-[1.03] hover:shadow-[0_0_60px_-6px_rgba(139,92,246,0.7)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "submitting" ? (
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        className="h-5 w-5 rounded-full border-2 border-background/40 border-t-background"
                      />
                    ) : (
                      "Send message"
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-foreground-muted">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-[var(--border-glass)] bg-white/[0.02] px-4 py-3 text-foreground outline-none transition-all duration-300 placeholder:text-foreground-muted/50 focus:border-accent-cyan/60 focus:shadow-[0_0_30px_-10px_rgba(34,211,238,0.5)]"
      />
    </div>
  );
}
