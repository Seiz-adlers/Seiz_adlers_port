"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics/track";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transform-gpu transition-all duration-500 ease-premium ${
          scrolled
            ? "border-b border-hair bg-bg/80 backdrop-blur-sm"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container-fluid flex h-[76px] items-center justify-between">
          <Link href="/" className="relative z-10 flex items-center gap-2.5" aria-label="Seiz Adlers home">
            <Image
              src="/logo.png"
              alt="Seiz Adlers"
              width={36}
              height={24}
              className="h-8 w-auto object-contain"
              priority
            />
            <span className="font-display text-[15px] font-semibold tracking-[0.08em] text-ink">
              SEIZ ADLERS
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex lg:gap-10" aria-label="Primary">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative text-[13px] font-medium uppercase tracking-[0.1em] transition-colors duration-300 ${
                    active ? "text-ink" : "text-ink-secondary hover:text-ink"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active-underline"
                      className="absolute -bottom-2 left-0 right-0 h-px bg-blue-bright"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Button href="/contact" variant="secondary" onClick={() => track("cta_click", { location: "navbar" })}>
              Let&rsquo;s Talk →
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="relative z-10 flex h-11 w-11 flex-col items-center justify-center gap-[6px] md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              className="block h-[1.5px] w-6 bg-ink"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              className="block h-[1.5px] w-6 bg-ink"
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-bg px-6 pb-10 pt-28 md:hidden"
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile">
              {[...navLinks, { label: "Contact", href: "/contact" }].map((link, i) => {
                const active = isActive(link.href);
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`flex min-h-[44px] items-center gap-3 border-b border-hair py-5 font-display text-4xl font-medium uppercase tracking-tight transition-colors ${
                        active ? "text-blue-bright" : "text-ink"
                      }`}
                    >
                      {active && <span className="h-1.5 w-1.5 rounded-full bg-blue-bright" aria-hidden />}
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Button href="/contact" className="w-full justify-center">
                Start a Project →
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
