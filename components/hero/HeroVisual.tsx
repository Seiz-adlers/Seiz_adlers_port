"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

/**
 * Restrained SVG visual instead of 3D: thin blue lines and nodes suggesting
 * a network / flight path, echoing the eagle-wing geometry in the logo
 * without recreating it. Pure CSS/SVG keeps this section fast and avoids
 * the bundle, battery and CLS cost a 3D scene would add for marginal gain.
 *
 * Draws itself in via whileInView (once: false) so it re-animates whenever
 * the hero is scrolled back to.
 */

const nodes = [
  { x: 420, y: 90 },
  { x: 340, y: 220 },
  { x: 470, y: 260 },
  { x: 300, y: 360 },
  { x: 430, y: 410 },
];

const paths = [
  "M60,420 C160,300 220,180 420,90",
  "M420,90 C450,150 460,200 340,220",
  "M340,220 C400,240 440,240 470,260",
  "M470,260 C420,300 360,330 430,410",
  "M340,220 C320,290 310,330 300,360",
];

const svgVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};

const pathVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 0.6, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } },
};

const nodeVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 0.9, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative h-full w-full" aria-hidden>
      <motion.svg
        viewBox="0 0 520 480"
        fill="none"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        variants={reduceMotion ? undefined : svgVariants}
        initial={reduceMotion ? undefined : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={{ once: false, amount: 0.4 }}
      >
        {paths.map((d) => (
          <motion.path
            key={d}
            d={d}
            stroke="url(#lineGradient)"
            strokeWidth={1}
            variants={reduceMotion ? undefined : pathVariants}
            {...(reduceMotion ? { opacity: 0.6 } : {})}
          />
        ))}

        {nodes.map((n) => (
          <motion.circle
            key={`${n.x}-${n.y}`}
            cx={n.x}
            cy={n.y}
            r={3}
            fill="#00A8FF"
            variants={reduceMotion ? undefined : nodeVariants}
            {...(reduceMotion ? { opacity: 0.9 } : {})}
          />
        ))}

        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="520" y2="480" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#008CFF" stopOpacity="0" />
            <stop offset="50%" stopColor="#00A8FF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0057A8" stopOpacity="0" />
          </linearGradient>
        </defs>
      </motion.svg>

      {!reduceMotion && (
        <motion.div
          className="pointer-events-none absolute inset-0"
          animate={{ opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(circle at 65% 35%, rgba(0,140,255,0.25), transparent 55%)",
          }}
        />
      )}
    </div>
  );
}
