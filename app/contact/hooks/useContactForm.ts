// app/contact/hooks/useContactForm.ts
"use client";

import { useCallback, useState } from "react";
import type { Intent } from "../data/intent";

interface UseContactFormReturn {
  loading: boolean;
  submitted: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, intent: Intent) => Promise<void>;
}

export function useContactForm(): UseContactFormReturn {
  const [loading,   setLoading]   = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>, intent: Intent) => {
      e.preventDefault();
      setLoading(true);

      /* ── Collect ALL named fields from the form ──────────────────────
         This is the correct approach. Using FormData.forEach() captures
         every <input name="...">, <select name="...">, <textarea name="...">,
         and <input type="hidden" name="..."> — meaning nothing is missed
         regardless of which intent form is rendered.
      ─────────────────────────────────────────────────────────────────── */
      const fd = new FormData(e.currentTarget);
      const data: Record<string, string> = { intent_type: intent };

      fd.forEach((value, key) => {
        // Skip blank hidden inputs (e.g. YesNoToggle before selection)
        if (value.toString().trim() !== "") {
          data[key] = value.toString();
        }
      });

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        setLoading(false);

        if (res.ok) {
          setSubmitted(true);
        } else {
          const body = await res.json().catch(() => ({}));
          alert(
            body?.error ??
            "Something went wrong. Please try again or reach out via WhatsApp."
          );
        }
      } catch {
        setLoading(false);
        alert("Network error. Please check your connection and try again.");
      }
    },
    []
  );

  return { loading, submitted, handleSubmit };
}