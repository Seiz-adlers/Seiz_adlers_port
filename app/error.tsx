"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[100svh] items-center justify-center text-center">
      <div className="container-fluid">
        <h1 className="font-display text-2xl font-semibold uppercase tracking-tight text-ink md:text-3xl">
          Something Went Wrong.
        </h1>
        <p className="mt-4 text-ink-secondary">Let&rsquo;s try that again.</p>
        <div className="mt-10 flex justify-center">
          <Button onClick={reset}>Retry →</Button>
        </div>
      </div>
    </section>
  );
}
