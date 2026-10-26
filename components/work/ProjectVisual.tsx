import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import type { ProjectMetric, ProjectVisualSpec } from "@/data/projects";

/**
 * Coded project covers. Sized in container units (cqw) so each composition
 * scales as one piece at any card width — no screenshots to go stale, and
 * nothing that repeats the homepage hero.
 */

const PALETTE = ["#030405", "#0066FF", "#00A8FF", "#F5F7FA"];

/**
 * Seiz Adlers' identity system: the eagle mark on its construction grid,
 * business-card stationery, and the wordmark on brand blue.
 */
export function BrandSystem({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "grid h-full w-full grid-cols-12 grid-rows-6 gap-[0.8cqw] bg-[#0b0d10] p-[0.8cqw] [container-type:inline-size]",
        className,
      )}
    >
      {/* mark + construction geometry */}
      <div className="relative col-span-6 row-span-6 grid place-items-center overflow-hidden bg-[#050607]">
        <div className="bg-grid absolute inset-0 opacity-70" />
        <svg viewBox="0 0 400 400" className="absolute h-[88%] w-auto" fill="none">
          <g stroke="rgba(0,168,255,0.35)" strokeWidth="0.6">
            <circle cx="200" cy="200" r="150" />
            <circle cx="200" cy="200" r="104" />
            <circle cx="236" cy="168" r="62" />
            <line x1="20" y1="200" x2="380" y2="200" />
            <line x1="200" y1="20" x2="200" y2="380" />
            <line x1="60" y1="340" x2="340" y2="60" />
          </g>
          <g stroke="rgba(255,255,255,0.12)" strokeWidth="0.6" strokeDasharray="3 4">
            <rect x="96" y="96" width="208" height="208" />
          </g>
        </svg>
        <Image
          src="/logo-mark.png"
          alt=""
          width={417}
          height={379}
          className="relative w-[24cqw] transition-transform duration-[1200ms] ease-premium group-hover:scale-105"
        />
        <span className="absolute bottom-[2cqw] left-[2cqw] text-[max(9px,0.95cqw)] font-medium uppercase tracking-[0.16em] text-white/50">
          Mark · Construction
        </span>
        <span className="absolute right-[2cqw] top-[2cqw] text-[max(9px,0.95cqw)] font-medium uppercase tracking-[0.16em] text-[#00A8FF]">
          01 / 03
        </span>
      </div>

      {/* stationery: business cards laid at an angle on paper — the brand,
          not any one person's details */}
      <div className="relative col-span-6 row-span-3 overflow-hidden bg-[#d9dde3]">
        <div className="noise absolute inset-0 opacity-[0.25] mix-blend-multiply" />
        <div className="absolute left-[10%] top-[14%] w-[62%] -rotate-[8deg] shadow-[0_2cqw_3cqw_-1cqw_rgba(0,0,0,0.5)] transition-transform duration-[1200ms] ease-premium group-hover:-rotate-[5deg]">
          {/* card back: textured black stock with a blind-embossed eagle */}
          <div className="relative aspect-[1063/626] overflow-hidden bg-[#111316]">
            <div className="noise absolute inset-0 opacity-[0.35] mix-blend-overlay" />
            <Image
              src="/logo-mark.png"
              alt=""
              width={417}
              height={379}
              className="absolute right-[8%] top-1/2 w-[42%] -translate-y-1/2 opacity-[0.22] brightness-50 grayscale"
            />
            <span className="absolute bottom-[12%] left-[9%] text-[max(8px,1cqw)] font-medium uppercase tracking-[0.24em] text-white/70">
              seizadlers.com
            </span>
          </div>
        </div>
        <div className="absolute bottom-[10%] right-[8%] aspect-[1063/626] w-[34%] rotate-[6deg] bg-[#030405] shadow-[0_2cqw_3cqw_-1cqw_rgba(0,0,0,0.5)]">
          <Image src="/logo-mark.png" alt="" width={417} height={379} className="absolute left-1/2 top-1/2 w-[30%] -translate-x-1/2 -translate-y-1/2" />
        </div>
        <span className="absolute bottom-[2cqw] left-[2cqw] text-[max(9px,0.95cqw)] font-medium uppercase tracking-[0.16em] text-black/55">
          Stationery
        </span>
      </div>

      {/* wordmark on blue */}
      <div className="bg-grain relative col-span-4 row-span-3 flex flex-col justify-between bg-[#0066FF] p-[1.8cqw] text-white">
        <span className="text-[max(9px,0.95cqw)] font-medium uppercase tracking-[0.16em] text-white/70">Wordmark</span>
        <p className="font-sans text-[3.6cqw] font-bold uppercase leading-[0.86] tracking-[-0.04em]">
          Seiz
          <br />
          Adlers
        </p>
      </div>

      {/* palette */}
      <div className="col-span-2 row-span-3 grid grid-rows-4 gap-[0.6cqw]">
        {PALETTE.map((hex) => (
          <div key={hex} className="flex items-end p-[0.7cqw]" style={{ backgroundColor: hex }}>
            <span
              className={cn(
                "text-[max(8px,0.8cqw)] font-semibold uppercase tracking-[0.06em]",
                hex === "#F5F7FA" ? "text-black/70" : "text-white/80",
              )}
            >
              {hex}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const TONES = {
  dark: { field: "bg-[#0b0d10]", ink: "text-white", line: "rgba(0,168,255,0.55)", faint: "rgba(255,255,255,0.10)", stroke: "rgba(255,255,255,0.16)", glow: "rgba(0,102,255,0.30)" },
  blue: { field: "bg-[#0066FF]", ink: "text-white", line: "rgba(255,255,255,0.75)", faint: "rgba(255,255,255,0.18)", stroke: "rgba(255,255,255,0.35)", glow: "rgba(255,255,255,0.18)" },
  paper: { field: "bg-[#EEF0F3]", ink: "text-[#030405]", line: "rgba(0,102,255,0.85)", faint: "rgba(3,4,5,0.10)", stroke: "rgba(3,4,5,0.14)", glow: "rgba(0,102,255,0.16)" },
} as const;

/** Six abstract motifs drawn on a 400×300 canvas. */
function Motif({ motif, line, faint }: { motif: ProjectVisualSpec["motif"]; line: string; faint: string }) {
  switch (motif) {
    case "curve":
      return (
        <>
          {[60, 120, 180, 240].map((y) => (
            <line key={y} x1="0" y1={y} x2="400" y2={y} stroke={faint} strokeWidth="0.6" />
          ))}
          {/* starts right of centre so it never crosses the metric */}
          <path d="M180 290 C 240 275, 270 235, 300 185 S 360 70, 400 30" stroke={line} strokeWidth="1.6" />
          <circle cx="400" cy="30" r="4" fill={line} />
        </>
      );
    case "bars":
      return (
        <>
          {[40, 70, 55, 95, 120, 165, 210].map((h, i) => (
            <rect key={i} x={170 + i * 30} y={300 - h} width="16" height={h} fill={i === 6 ? line : faint} />
          ))}
        </>
      );
    case "rings":
      return (
        <>
          {[150, 115, 80, 45].map((r) => (
            <circle key={r} cx="300" cy="150" r={r} stroke={faint} strokeWidth="0.8" />
          ))}
          <circle cx="300" cy="150" r="10" fill={line} />
          <line x1="0" y1="150" x2="400" y2="150" stroke={faint} strokeWidth="0.6" />
        </>
      );
    case "grid":
      return (
        <>
          {Array.from({ length: 6 }, (_, r) =>
            Array.from({ length: 9 }, (_, c) => (
              <rect
                key={`${r}-${c}`}
                x={140 + c * 28}
                y={40 + r * 28}
                width="18"
                height="18"
                fill={(r * 9 + c) % 7 === 3 ? line : "none"}
                stroke={faint}
                strokeWidth="0.8"
              />
            )),
          )}
        </>
      );
    case "nodes": {
      const pts = [
        [180, 220], [230, 140], [300, 190], [340, 90], [270, 60], [380, 200],
      ];
      return (
        <>
          {pts.slice(1).map(([x, y], i) => (
            <line key={i} x1={pts[i][0]} y1={pts[i][1]} x2={x} y2={y} stroke={faint} strokeWidth="1" />
          ))}
          <line x1="230" y1="140" x2="340" y2="90" stroke={faint} strokeWidth="1" />
          {pts.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={i === 3 ? 7 : 4} fill={i === 3 ? line : faint} />
          ))}
        </>
      );
    }
    case "funnel":
      return (
        <>
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={160 + i * 22} y={50 + i * 55} width={220 - i * 44} height="38" fill={i === 3 ? line : "none"} stroke={i === 3 ? "none" : faint} strokeWidth="1" />
          ))}
        </>
      );
  }
}

/**
 * Cover art for campaign and solution entries: a tone, a motif, and — when
 * the project has one — its headline metric set large.
 */
export function CaseVisual({
  spec,
  metric,
  label,
  compact = false,
  className,
}: {
  spec: ProjectVisualSpec;
  metric?: ProjectMetric;
  label: string;
  /** Thumbnail use: artwork only, no text. */
  compact?: boolean;
  className?: string;
}) {
  const t = TONES[spec.tone];
  return (
    <div aria-hidden className={cn("relative h-full w-full overflow-hidden [container-type:inline-size]", t.field, t.ink, className)}>
      <div
        className="absolute -right-[20cqw] -top-[25cqw] h-[80cqw] w-[80cqw] rounded-full transition-transform duration-[1200ms] ease-premium group-hover:scale-110"
        style={{ background: `radial-gradient(circle, ${t.glow}, transparent 65%)` }}
      />
      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 h-full w-full transition-transform duration-[1200ms] ease-premium group-hover:scale-[1.03]"
        fill="none"
        preserveAspectRatio="xMaxYMax slice"
      >
        <Motif motif={spec.motif} line={t.line} faint={t.stroke} />
      </svg>
      <div className="noise absolute inset-0 opacity-[0.16] mix-blend-overlay" />
      {!compact && <span className="absolute left-[5cqw] top-[5cqw] text-[max(10px,1.8cqw)] font-medium uppercase tracking-[0.16em] opacity-70">
        {label}
      </span>}
      {metric && !compact && (
        <div className="absolute bottom-[5cqw] left-[5cqw]">
          <p className="font-sans text-[18cqw] font-bold leading-[0.85] tracking-[-0.06em]">{metric.value}</p>
          <p className="mt-[1.5cqw] text-[max(10px,1.8cqw)] font-semibold uppercase tracking-[0.14em] opacity-75">
            {metric.label}
          </p>
        </div>
      )}
    </div>
  );
}
