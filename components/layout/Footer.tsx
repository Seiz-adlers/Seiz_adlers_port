"use client";

import Link from "next/link";
import Image from "next/image";
import { footerLinks, siteConfig } from "@/data/site";
import { track } from "@/lib/analytics/track";

export function Footer() {
  return (
    <footer className="border-t border-hair bg-bg-secondary">
      <div className="container-fluid py-20 md:py-28">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src="/logo.png"
              alt="Seiz Adlers"
              width={48}
              height={32}
              className="mb-6 h-9 w-auto object-contain"
            />
            <p className="max-w-sm font-display text-2xl font-medium leading-tight text-ink md:text-3xl">
              BUILD THE BRAND
              <br />
              PEOPLE REMEMBER.
            </p>
          </div>

          <div>
            <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.15em] text-ink-muted">
              Navigate
            </p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-ink-secondary transition-colors duration-300 hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.15em] text-ink-muted">
              Contact
            </p>
            <ul className="space-y-3 text-[15px] text-ink-secondary">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="transition-colors duration-300 hover:text-ink">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="transition-colors duration-300 hover:text-ink">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("outbound_social_click", { network: "instagram" })}
                  className="transition-colors duration-300 hover:text-ink"
                >
                  {siteConfig.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col-reverse items-start justify-between gap-6 border-t border-hair pt-8 text-[13px] text-ink-muted md:flex-row md:items-center">
          <p>&copy; 2026 SEIZ ADLERS</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-ink-secondary">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-ink-secondary">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
