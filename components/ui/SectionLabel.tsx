interface SectionLabelProps {
  index: string;
  label: string;
  align?: "left" | "center";
}

export function SectionLabel({ index, label, align = "left" }: SectionLabelProps) {
  return (
    <div
      className={`flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.2em] text-accent ${
        align === "center" ? "justify-center" : ""
      }`}
    >
      <span className="text-ink-muted">{index}</span>
      <span className="h-px w-6 bg-blueline" aria-hidden />
      <span>{label}</span>
    </div>
  );
}
