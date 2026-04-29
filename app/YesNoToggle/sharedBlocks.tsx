// app/contact/components/SharedBlocks.tsx
"use client";

import { FloatInput, FloatSelect, FloatTextarea, SectionDivider } from "../contact/components/fields";
import { SERVICE_TYPES } from "../contact/data/intent";

/* ─── Basic Info (name / email / phone) — used by every intent form ───── */
export function BasicInfo() {
  return (
    <>
      <SectionDivider label="Your Details" />
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
        gap: 14,
        marginBottom: 14,
      }}>
        <FloatInput name="full_name" label="Full Name" />
        <FloatInput name="email"     label="Email Address" type="email" />
        <FloatInput name="phone"     label="Phone Number"  type="tel" />
      </div>
    </>
  );
}

/* ─── Shared Tail (referral, service type, extra notes) ─────────────────── */
export function SharedTail() {
  return (
    <>
      <SectionDivider label="A Few More Things" />
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
        gap: 14,
        marginBottom: 14,
      }}>
        <FloatInput
          name="referral"
          label="How did you hear about Marvel?"
          required={false}
        />
        <FloatSelect
          name="service_type"
          label="Select Service Type"
          required={false}
          options={SERVICE_TYPES}
        />
      </div>
      <FloatTextarea
        name="extra_notes"
        label="Additional questions or information?"
        rows={3}
        required={false}
      />
    </>
  );
}