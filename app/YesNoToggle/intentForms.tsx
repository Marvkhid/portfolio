// app/contact/components/IntentForms.tsx
"use client";

import {
  FloatInput,
  FloatSelect,
  FloatTextarea,
  YesNoToggle,
  SectionDivider,
} from "../contact/components/fields";
import { BasicInfo, SharedTail } from "../YesNoToggle/sharedBlocks";
import {
  WEBSITE_TYPES,
  BUDGET_OPTIONS,
  CONSULT_TOPICS,
  DURATION_OPTIONS,
  ROLE_OPTIONS,
  PROJECT_BUDGET_OPTIONS,
  EVENT_TYPES,
} from "../contact/data/intent";

/* ─── Need a Website ──────────────────────────────────────────────────── */
export function WebsiteForm() {
  return (
    <>
      <BasicInfo />

      <SectionDivider label="Web Project Details" />
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
        gap: 14,
        marginBottom: 14,
      }}>
        <FloatInput name="business_age" label="How long has your business been operating?" />
        <FloatInput name="org_name"     label="Name of Organisation" />
      </div>

      <div style={{ marginBottom: 14 }}>
        <FloatSelect
          name="website_type"
          label="What type of website do you need?"
          options={WEBSITE_TYPES}
        />
      </div>

      <div style={{ marginBottom: 14 }}>
        <FloatTextarea
          name="project_goals"
          label="How can a new or redesigned website help you achieve your goals?"
          rows={4}
        />
      </div>

      <SectionDivider label="Budget & Brand" />
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
        gap: 14,
        marginBottom: 14,
      }}>
        <FloatSelect
          name="budget"
          label="Estimated Budget (USD)"
          options={BUDGET_OPTIONS}
        />
        <YesNoToggle
          name="has_brand_identity"
          label="Do you have an existing brand identity? (Logo, colours, fonts)"
        />
      </div>

      <SharedTail />
    </>
  );
}

/* ─── Consult Me ──────────────────────────────────────────────────────── */
export function ConsultForm() {
  return (
    <>
      <BasicInfo />

      <SectionDivider label="Consultation Details" />
      <div style={{ marginBottom: 14 }}>
        <FloatInput name="org_name" label="Name of Organisation" />
      </div>

      <div style={{ marginBottom: 14 }}>
        <FloatTextarea name="challenge" label="Briefly explain your challenge" rows={4} />
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
        gap: 14,
        marginBottom: 14,
      }}>
        <FloatInput
          name="preferred_datetime"
          label="Preferred Date / Time"
          type="datetime-local"
        />
        <FloatSelect
          name="duration"
          label="Select Duration"
          options={DURATION_OPTIONS}
        />
      </div>

      <div style={{ marginBottom: 14 }}>
        <FloatSelect
          name="consult_topic"
          label="What do you need help with?"
          options={CONSULT_TOPICS}
        />
      </div>

      <SharedTail />
    </>
  );
}

/* ─── Add Me to a Project ─────────────────────────────────────────────── */
export function ProjectForm() {
  return (
    <>
      <BasicInfo />

      <SectionDivider label="Project Information" />
      <div style={{ marginBottom: 14 }}>
        <FloatInput name="team_name" label="Company / Team Name" />
      </div>

      <div style={{ marginBottom: 14 }}>
        <FloatTextarea name="project_desc" label="Project Description" rows={4} />
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
        gap: 14,
        marginBottom: 14,
      }}>
        <FloatSelect
          name="role_needed"
          label="Your Role Needed"
          options={ROLE_OPTIONS}
        />
        <FloatInput name="timeline" label="Project Timeline" placeholder="e.g. 6 weeks" />
      </div>

      <div style={{ marginBottom: 14 }}>
        <FloatSelect
          name="budget_range"
          label="Budget Range (USD)"
          options={PROJECT_BUDGET_OPTIONS}
        />
      </div>

      <SharedTail />
    </>
  );
}

/* ─── Invite Me to Speak ──────────────────────────────────────────────── */
export function SpeakForm() {
  return (
    <>
      <BasicInfo />

      <SectionDivider label="Event Details" />
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
        gap: 14,
        marginBottom: 14,
      }}>
        <FloatInput name="event_org" label="Organisation / Event Name" />
        <FloatSelect
          name="event_type"
          label="Event Type"
          options={EVENT_TYPES}
        />
      </div>

      <div style={{ marginBottom: 14 }}>
        <FloatInput name="topic" label="Topic or Theme" />
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
        gap: 14,
        marginBottom: 14,
      }}>
        <FloatInput name="event_date"    label="Event Date"    type="date" />
        <FloatInput name="audience_size" label="Audience Size" type="number" />
      </div>

      <div style={{ marginBottom: 14 }}>
        <FloatTextarea name="event_notes" label="Additional Details" rows={4} />
      </div>

      <SharedTail />
    </>
  );
}