"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ThreadLines } from "@/components/hero/ThreadLines";
import { useReducedMotionSafe } from "@/components/motion/useReducedMotionSafe";

const words = ["Strategy", "Brand", "Experience", "Technology", "Growth"];

const paths = [
  { n: "01", label: "What we build", href: "/services" },
  { n: "02", label: "The team & method", href: "/about" },
  { n: "03", label: "Insights", href: "/insights" },
];

const list: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0.15, x: -18 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export function NotAnotherAgency() {
  const reduceMotion = useReducedMotionSafe();

  return (
    <section className="relative isolate overflow-hidden border-t border-hair bg-bg py-14 md:py-20">
      {/* the hero's hairline threads, continued onto the paper */}
      <ThreadLines className="-z-10" color="rgba(20,18,14,0.09)" />
      <div className="container-fluid grid gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <SectionLabel index="01" label="Introduction" />
          <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold uppercase leading-[1.05] tracking-tight text-ink text-balance">
            Not another agency.
            <br />
            <span className="text-ink-secondary">A growth partner.</span>
          </h2>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-secondary">
            Strategy, creative, technology and growth — brought together under one roof.
          </p>

          <ul className="mt-12 border-t border-hair">
            {paths.map((path) => (
              <li key={path.href}>
                <Link
                  href={path.href}
                  className="group flex items-center justify-between gap-6 border-b border-hair py-5 transition-colors"
                >
                  <span className="flex items-baseline gap-5">
                    <span className="font-display text-xs text-ink-muted">{path.n}</span>
                    <span className="font-display text-lg font-medium uppercase tracking-tight text-ink transition-colors group-hover:text-accent md:text-xl">
                      {path.label}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="text-ink-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          className="font-display text-[clamp(2rem,5vw,3.75rem)] font-medium uppercase leading-tight text-ink lg:pt-2"
          variants={reduceMotion ? undefined : list}
          initial={reduceMotion ? undefined : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: false, amount: 0.5 }}
        >
          {words.map((word) => (
            <motion.span key={word} variants={reduceMotion ? undefined : item} className="block">
              {word}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
