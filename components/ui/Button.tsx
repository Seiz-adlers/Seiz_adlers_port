"use client";

import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { Magnetic } from "@/components/motion/Magnetic";
import type { ReactNode, ButtonHTMLAttributes } from "react";

interface BaseProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

interface LinkButtonProps extends BaseProps {
  href: string;
  onClick?: () => void;
}

interface ActionButtonProps extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: undefined;
}

const variants = {
  primary:
    "bg-ink text-bg hover:bg-blue-bright hover:text-white border border-transparent",
  secondary:
    "bg-transparent text-ink border border-hair hover:border-blueline hover:bg-ink/[0.04]",
  ghost: "bg-transparent text-ink/90 hover:text-accent border border-transparent",
};

const base =
  "inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-[13px] font-medium tracking-[0.08em] uppercase transition-colors duration-300 ease-premium min-h-[44px]";

export function Button(props: LinkButtonProps | ActionButtonProps) {
  const { children, variant = "primary", className } = props;
  const classes = cn(base, variants[variant], className);

  if ("href" in props && props.href) {
    return (
      <Magnetic>
        <Link href={props.href} onClick={props.onClick} className={classes}>
          {children}
        </Link>
      </Magnetic>
    );
  }

  const { onClick, type, disabled } = props as ActionButtonProps;
  return (
    <Magnetic>
      <button
        type={type ?? "button"}
        onClick={onClick}
        disabled={disabled}
        className={classes}
      >
        {children}
      </button>
    </Magnetic>
  );
}
