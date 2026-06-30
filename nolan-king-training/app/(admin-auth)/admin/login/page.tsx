"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      const from = searchParams.get("from") ?? "/admin/plans";
      router.replace(from);
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error === "Too many attempts. Try again later." ? data.error : "Incorrect password.");
      setLoading(false);
    }
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#000000" }}>
      <div style={{ backgroundColor: "#121212", padding: "40px", borderRadius: "12px", width: "100%", maxWidth: "360px", border: "1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ marginBottom: "28px", textAlign: "center" }}>
          <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#c9a84c", letterSpacing: "-0.02em", marginBottom: "4px" }}>
            NK Admin
          </div>
          <div style={{ fontSize: "0.85rem", color: "#666666" }}>Nolan King Training</div>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "10px 14px", backgroundColor: "#1e1e1e", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "8px", color: "#ffffff", fontSize: "0.95rem", marginBottom: "12px", boxSizing: "border-box", outline: "none" }}
            autoFocus
          />
          {error && (
            <p style={{ color: "#ff6b6b", fontSize: "0.85rem", marginBottom: "12px" }}>{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            style={{ width: "100%", padding: "10px", backgroundColor: "#c9a84c", color: "#000000", fontWeight: 700, border: "none", borderRadius: "8px", cursor: loading ? "not-allowed" : "pointer", fontSize: "0.95rem", opacity: loading ? 0.7 : 1 }}
          >
            {loading ? "Logging in…" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
