// app/contact/components/fields.tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

/* ─── Shared style tokens ─────────────────────────────────────────────── */
const inputBase: React.CSSProperties = {
  width: "100%",
  borderRadius: 12,
  border: "1.5px solid rgba(14,165,197,0.35)",
  background: "rgba(255,255,255,0.82)",
  backdropFilter: "blur(12px)",
  color: "#0c4a6e",
  fontSize: "0.95rem",
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 400,
  outline: "none",
  boxShadow: "0 2px 8px rgba(14,165,197,0.08)",
  transition: "all 0.28s ease",
  boxSizing: "border-box",
};

const inputFocus: Partial<React.CSSProperties> = {
  border: "1.5px solid #38bdf8",
  background: "rgba(255,255,255,0.95)",
  boxShadow: "0 0 0 3px rgba(56,189,248,0.2), 0 4px 16px rgba(14,165,197,0.12)",
};

function labelStyle(active: boolean, focused: boolean): React.CSSProperties {
  return {
    position: "absolute",
    left: 18,
    pointerEvents: "none",
    transition: "all 0.22s cubic-bezier(0.34,1.56,0.64,1)",
    fontFamily: "'DM Sans', sans-serif",
    ...(active
      ? {
          top: 7,
          transform: "none",
          fontSize: "0.67rem",
          fontWeight: 700,
          color: focused ? "#0ea5c5" : "#0369a1",
          letterSpacing: "0.1em",
          textTransform: "uppercase" as const,
        }
      : {
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "0.93rem",
          fontWeight: 400,
          color: "rgba(3,105,161,0.6)",
          letterSpacing: "0.01em",
        }),
  };
}

/* ─── FloatInput ──────────────────────────────────────────────────────── */
export function FloatInput({
  name,
  label,
  type = "text",
  required = true,
  placeholder = "",
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  const [focused, setFocused] = useState(false);
  const [filled,  setFilled]  = useState(false);
  const active = focused || filled;

  return (
    <div style={{ position: "relative" }}>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={focused ? placeholder : ""}
        onFocus={() => setFocused(true)}
        onBlur={(e) => { setFocused(false); setFilled(!!e.target.value); }}
        onChange={(e) => setFilled(!!e.target.value)}
        style={{
          ...inputBase,
          padding: "22px 18px 9px",
          ...(focused ? inputFocus : {}),
        }}
      />
      <label style={labelStyle(active, focused)}>{label}</label>
    </div>
  );
}

/* ─── FloatSelect ─────────────────────────────────────────────────────── */
export function FloatSelect({
  name,
  label,
  options,
  required = true,
}: {
  name: string;
  label: string;
  options: string[];
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const [val,     setVal]     = useState("");
  const active = focused || !!val;

  return (
    <div style={{ position: "relative" }}>
      <select
        name={name}
        required={required}
        defaultValue=""
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => setVal(e.target.value)}
        style={{
          ...inputBase,
          padding: "22px 40px 9px 18px",
          color: val ? "#0c4a6e" : "transparent",
          appearance: "none",
          WebkitAppearance: "none",
          cursor: "pointer",
          ...(focused ? inputFocus : {}),
        }}
      >
        <option value="" disabled />
        {options.map((o) => (
          <option key={o} value={o} style={{ color: "#0c4a6e", background: "#fff" }}>
            {o}
          </option>
        ))}
      </select>
      <div style={{
        position: "absolute", right: 14, top: "50%",
        transform: "translateY(-50%)", pointerEvents: "none", color: "#0ea5c5",
      }}>
        <ChevronDown size={16} />
      </div>
      <label style={labelStyle(active, focused)}>{label}</label>
    </div>
  );
}

/* ─── FloatTextarea ───────────────────────────────────────────────────── */
export function FloatTextarea({
  name,
  label,
  rows = 4,
  required = true,
}: {
  name: string;
  label: string;
  rows?: number;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const [filled,  setFilled]  = useState(false);
  const active = focused || filled;

  return (
    <div style={{ position: "relative" }}>
      <textarea
        name={name}
        rows={rows}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={(e) => { setFocused(false); setFilled(!!e.target.value); }}
        onChange={(e) => setFilled(!!e.target.value)}
        style={{
          ...inputBase,
          padding: "28px 18px 12px",
          resize: "vertical",
          lineHeight: 1.65,
          ...(focused ? inputFocus : {}),
        }}
      />
      <label
        style={{
          ...labelStyle(active, focused),
          top: active ? 8 : 20,
          transform: "none",
        }}
      >
        {label}
      </label>
    </div>
  );
}

/* ─── YesNoToggle ─────────────────────────────────────────────────────── */
export function YesNoToggle({ name, label }: { name: string; label: string }) {
  const [val, setVal] = useState<"yes" | "no" | null>(null);

  return (
    <div>
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.78rem",
        fontWeight: 700,
        color: "#0369a1",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        margin: "0 0 10px",
      }}>
        {label}
      </p>
      <div style={{ display: "flex", gap: 10 }}>
        {(["yes", "no"] as const).map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => setVal(v)}
            style={{
              padding: "10px 28px",
              borderRadius: 99,
              border: `1.5px solid ${val === v ? "#0ea5c5" : "rgba(14,165,197,0.3)"}`,
              background: val === v
                ? "linear-gradient(135deg, #38bdf8, #0ea5c5)"
                : "rgba(255,255,255,0.7)",
              color: val === v ? "#fff" : "#0369a1",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: "0.88rem",
              cursor: "pointer",
              transition: "all 0.22s ease",
              textTransform: "capitalize",
            }}
          >
            {v === "yes" ? "✓ Yes" : "✗ No"}
          </button>
        ))}
      </div>
      {/* Hidden input carries the value into FormData */}
      <input type="hidden" name={name} value={val ?? ""} />
    </div>
  );
}

/* ─── SectionDivider ──────────────────────────────────────────────────── */
export function SectionDivider({ label }: { label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "28px 0 22px" }}>
      <div style={{
        height: 1, flex: 1,
        background: "linear-gradient(90deg, transparent, rgba(14,165,197,0.3))",
      }} />
      <span style={{
        fontSize: "0.68rem",
        fontWeight: 700,
        color: "#0ea5c5",
        letterSpacing: "0.14em",
        fontFamily: "'DM Sans', sans-serif",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        padding: "4px 12px",
        background: "rgba(14,165,197,0.08)",
        borderRadius: 99,
        border: "1px solid rgba(14,165,197,0.2)",
      }}>
        {label}
      </span>
      <div style={{
        height: 1, flex: 1,
        background: "linear-gradient(90deg, rgba(14,165,197,0.3), transparent)",
      }} />
    </div>
  );
}