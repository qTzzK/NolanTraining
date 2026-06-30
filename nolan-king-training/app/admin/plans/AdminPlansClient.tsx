"use client";

import { useState } from "react";
import type { Plan } from "@/lib/supabase";

type EditState = {
  name: string;
  duration: string;
  price: string;
  price_in_cents: number;
  description: string;
  features: string;
  cta: string;
  highlight: boolean;
};

function formatCents(cents: number): string {
  return "$" + (cents / 100).toLocaleString("en-US", { minimumFractionDigits: 2 });
}

function PlanRow({ plan, onSaved }: { plan: Plan; onSaved: (updated: Plan) => void }) {
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState<EditState>({
    name: plan.name,
    duration: plan.duration,
    price: plan.price,
    price_in_cents: plan.price_in_cents,
    description: plan.description,
    features: plan.features.join("\n"),
    cta: plan.cta,
    highlight: plan.highlight,
  });

  function handleCancel() {
    setForm({
      name: plan.name,
      duration: plan.duration,
      price: plan.price,
      price_in_cents: plan.price_in_cents,
      description: plan.description,
      features: plan.features.join("\n"),
      cta: plan.cta,
      highlight: plan.highlight,
    });
    setError("");
    setEditing(false);
  }

  async function handleSave() {
    setSaving(true);
    setError("");
    const features = form.features.split("\n").map((f) => f.trim()).filter(Boolean);
    const res = await fetch(`/api/admin/plans/${plan.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, features }),
    });
    if (res.ok) {
      const updated: Plan = await res.json();
      onSaved(updated);
      setEditing(false);
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? "Failed to save.");
    }
    setSaving(false);
  }

  const inputStyle = {
    width: "100%",
    padding: "8px 10px",
    backgroundColor: "#1a1a1a",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "6px",
    color: "#ffffff",
    fontSize: "0.875rem",
    boxSizing: "border-box" as const,
    outline: "none",
  };

  const labelStyle = {
    display: "block",
    fontSize: "0.72rem",
    fontWeight: 600,
    color: "#666666",
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
    marginBottom: "4px",
  };

  if (!editing) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px 16px", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "2px" }}>
            <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "#ffffff" }}>{plan.name}</span>
            {plan.highlight && (
              <span style={{ fontSize: "0.65rem", fontWeight: 700, padding: "1px 7px", borderRadius: "999px", backgroundColor: "#3d2800", color: "#c9a84c", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Featured
              </span>
            )}
          </div>
          <div style={{ display: "flex", gap: "12px", fontSize: "0.78rem", color: "#666666" }}>
            <span style={{ color: "#c9a84c", fontWeight: 600 }}>{plan.price}</span>
            <span>{plan.duration}</span>
          </div>
        </div>
        <button
          onClick={() => setEditing(true)}
          style={{ padding: "5px 14px", fontSize: "0.78rem", backgroundColor: "#1e1e1e", color: "#cccccc", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.08)", cursor: "pointer" }}
        >
          Edit
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px 16px", borderBottom: "1px solid rgba(255,255,255,0.07)", backgroundColor: "#0d0d0d" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
        <div>
          <label style={labelStyle}>Name</label>
          <input style={inputStyle} value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
        </div>
        <div>
          <label style={labelStyle}>Duration</label>
          <input style={inputStyle} value={form.duration} onChange={(e) => setForm((f) => ({ ...f, duration: e.target.value }))} />
        </div>
        <div>
          <label style={labelStyle}>Price Display (e.g. "$320" or "$220/Monthly")</label>
          <input style={inputStyle} value={form.price} onChange={(e) => setForm((f) => ({ ...f, price: e.target.value }))} />
        </div>
        <div>
          <label style={labelStyle}>Price in Cents (e.g. 32000)</label>
          <input
            style={inputStyle}
            type="number"
            value={form.price_in_cents}
            onChange={(e) => setForm((f) => ({ ...f, price_in_cents: parseInt(e.target.value) || 0 }))}
          />
          <p style={{ fontSize: "0.7rem", color: "#555", marginTop: "3px" }}>= {formatCents(form.price_in_cents)} charged at checkout</p>
        </div>
        <div>
          <label style={labelStyle}>CTA Button Text</label>
          <input style={inputStyle} value={form.cta} onChange={(e) => setForm((f) => ({ ...f, cta: e.target.value }))} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingTop: "20px" }}>
          <input
            type="checkbox"
            id={`highlight-${plan.id}`}
            checked={form.highlight}
            onChange={(e) => setForm((f) => ({ ...f, highlight: e.target.checked }))}
            style={{ width: "16px", height: "16px", accentColor: "#c9a84c", cursor: "pointer" }}
          />
          <label htmlFor={`highlight-${plan.id}`} style={{ fontSize: "0.875rem", color: "#cccccc", cursor: "pointer" }}>
            Featured / "Most Popular"
          </label>
        </div>
      </div>

      <div style={{ marginBottom: "12px" }}>
        <label style={labelStyle}>Description</label>
        <textarea
          style={{ ...inputStyle, minHeight: "70px", resize: "vertical" }}
          value={form.description}
          onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
        />
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label style={labelStyle}>Features (one per line)</label>
        <textarea
          style={{ ...inputStyle, minHeight: "120px", resize: "vertical", fontFamily: "monospace" }}
          value={form.features}
          onChange={(e) => setForm((f) => ({ ...f, features: e.target.value }))}
        />
      </div>

      {error && <p style={{ color: "#ff6b6b", fontSize: "0.85rem", marginBottom: "10px" }}>{error}</p>}

      <div style={{ display: "flex", gap: "8px" }}>
        <button
          onClick={handleSave}
          disabled={saving}
          style={{ padding: "8px 20px", backgroundColor: "#c9a84c", color: "#000000", fontWeight: 700, border: "none", borderRadius: "7px", cursor: saving ? "not-allowed" : "pointer", fontSize: "0.875rem", opacity: saving ? 0.7 : 1 }}
        >
          {saving ? "Saving…" : "Save"}
        </button>
        <button
          onClick={handleCancel}
          disabled={saving}
          style={{ padding: "8px 16px", backgroundColor: "transparent", color: "#888888", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "7px", cursor: "pointer", fontSize: "0.875rem" }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default function AdminPlansClient({ initialPlans }: { initialPlans: Plan[] }) {
  const [plans, setPlans] = useState<Plan[]>(initialPlans);

  const programs = plans.filter((p) => p.type === "program").sort((a, b) => a.sort_order - b.sort_order);
  const consultation = plans.filter((p) => p.type === "consultation");

  function handleSaved(updated: Plan) {
    setPlans((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
  }

  function Section({ title, description, items }: { title: string; description: string; items: Plan[] }) {
    return (
      <div style={{ marginBottom: "32px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
          <div>
            <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "#ffffff", marginBottom: "2px" }}>{title}</h2>
            <p style={{ fontSize: "0.8rem", color: "#555555" }}>{description}</p>
          </div>
          <a
            href="/services"
            target="_blank"
            style={{ fontSize: "0.75rem", color: "#555555", textDecoration: "none", padding: "5px 10px", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "6px" }}
          >
            View Live ↗
          </a>
        </div>
        <div style={{ backgroundColor: "#111111", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.07)", overflow: "hidden" }}>
          {items.length === 0 ? (
            <p style={{ padding: "24px", color: "#555555", fontSize: "0.875rem", textAlign: "center" }}>No plans found.</p>
          ) : (
            items.map((plan) => (
              <PlanRow key={plan.id} plan={plan} onSaved={handleSaved} />
            ))
          )}
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: "32px" }}>
      <div style={{ marginBottom: "32px" }}>
        <h1 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#ffffff", marginBottom: "4px" }}>Programs & Pricing</h1>
        <p style={{ color: "#555555", fontSize: "0.85rem" }}>Edit program names, prices, descriptions, and features shown on the public services page.</p>
      </div>

      <Section
        title="Coaching Programs"
        description="The 6 program cards shown on the services page."
        items={programs}
      />

      <Section
        title="Consultation"
        description="The consultation booking section at the bottom of the services page."
        items={consultation}
      />
    </div>
  );
}
