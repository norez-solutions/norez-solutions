"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function BackgroundFx() {
  const { scrollYProgress } = useScroll();

  const yCyan = useTransform(scrollYProgress, [0, 1], [0, -320]);
  const yViolet = useTransform(scrollYProgress, [0, 1], [0, 420]);
  const yMagenta = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />
      <motion.div
        style={{ y: yCyan }}
        className="absolute -left-40 top-0 h-[36rem] w-[36rem] rounded-full bg-accent-cyan/20 blur-[120px]"
      />
      <motion.div
        style={{ y: yViolet }}
        className="absolute right-[-10rem] top-[30%] h-[40rem] w-[40rem] rounded-full bg-accent-violet/20 blur-[130px]"
      />
      <motion.div
        style={{ y: yMagenta, rotate }}
        className="absolute bottom-0 left-[10%] h-[30rem] w-[30rem] rounded-full bg-accent-magenta/10 blur-[110px]"
      />
    </div>
  );
}
