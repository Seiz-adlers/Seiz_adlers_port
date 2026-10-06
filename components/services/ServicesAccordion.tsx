"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { Service } from "@/data/services";

export function ServicesAccordion({ services }: { services: Service[] }) {
  const [openSlug, setOpenSlug] = useState<string>(services[0]?.slug ?? "");

  return (
    <div className="border-t border-hair">
      {services.map((service) => {
        const isOpen = openSlug === service.slug;
        return (
          <div key={service.slug} className="border-b border-hair">
            <button
              type="button"
              onClick={() => setOpenSlug(isOpen ? "" : service.slug)}
              aria-expanded={isOpen}
              aria-controls={`service-panel-${service.slug}`}
              className={`flex w-full items-center justify-between gap-6 py-7 text-left transition-opacity duration-500 md:py-9 ${
                openSlug && !isOpen ? "opacity-40 hover:opacity-70" : "opacity-100"
              }`}
            >
              <span className="flex items-baseline gap-4 md:gap-8">
                <span className="font-display text-sm text-ink-muted md:text-base">{service.number}</span>
                <span className="font-display text-2xl font-semibold uppercase tracking-tight text-ink sm:text-3xl md:text-4xl">
                  {service.title}
                </span>
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="shrink-0 font-display text-2xl text-ink-secondary"
                aria-hidden
              >
                +
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`service-panel-${service.slug}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="grid gap-6 pb-9 md:grid-cols-[1fr_auto] md:items-end md:gap-10">
                    <div>
                      <p className="mb-5 max-w-md text-ink-secondary">{service.tagline}</p>
                      <ul className="flex flex-wrap gap-x-8 gap-y-2">
                        {service.capabilities.map((cap) => (
                          <li key={cap} className="text-sm text-ink-secondary">
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex shrink-0 items-center gap-2 text-[13px] font-medium uppercase tracking-[0.1em] text-accent transition-transform hover:translate-x-1"
                    >
                      Explore Service →
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
