"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

const NAV = [
  { href: "/admin/plans", label: "Programs & Pricing" },
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isMobile;
}

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const isMobile = useIsMobile();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = drawerOpen ? "hidden" : "";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen, isMobile]);

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
  }

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(href + "/");
  }

  const sidebarContent = (
    <>
      <nav style={{ flex: 1, padding: "16px 12px" }}>
        <div style={{ marginBottom: "4px" }}>
          <p style={{ fontSize: "0.65rem", fontWeight: 700, color: "#c9a84c", textTransform: "uppercase", letterSpacing: "0.08em", padding: "0 10px", marginBottom: "6px" }}>
            Content
          </p>
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "9px 10px",
                borderRadius: "7px",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: isActive(item.href) ? 600 : 400,
                color: isActive(item.href) ? "#ffffff" : "#888888",
                backgroundColor: isActive(item.href) ? "rgba(255,255,255,0.06)" : "transparent",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      <div style={{ padding: "12px", borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", flexDirection: "column", gap: "4px", flexShrink: 0 }}>
        <Link
          href="/services"
          style={{ display: "flex", alignItems: "center", gap: "6px", padding: "7px 10px", borderRadius: "7px", fontSize: "0.8rem", color: "#555555", textDecoration: "none" }}
        >
          <span>←</span>
          <span>View Site</span>
        </Link>
        <button
          onClick={handleLogout}
          style={{ width: "100%", padding: "7px 10px", borderRadius: "7px", backgroundColor: "transparent", border: "none", cursor: "pointer", fontSize: "0.8rem", color: "#555555", textAlign: "left" }}
        >
          Logout
        </button>
      </div>
    </>
  );

  if (!isMobile) {
    return (
      <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#0a0a0a", color: "#ffffff" }}>
        <aside style={{ width: "220px", flexShrink: 0, backgroundColor: "#000000", borderRight: "1px solid rgba(255,255,255,0.07)", display: "flex", flexDirection: "column", position: "sticky", top: 0, height: "100vh" }}>
          <div style={{ padding: "16px 12px", borderBottom: "1px solid rgba(255,255,255,0.07)", flexShrink: 0 }}>
            <Link href="/admin/plans" style={{ textDecoration: "none" }}>
              <div style={{ fontSize: "1rem", fontWeight: 800, color: "#c9a84c", letterSpacing: "-0.01em" }}>
                NK Admin
              </div>
              <div style={{ fontSize: "0.7rem", color: "#444444", marginTop: "2px" }}>Nolan King Training</div>
            </Link>
          </div>
          {sidebarContent}
        </aside>
        <main style={{ flex: 1, minWidth: 0, overflowY: "auto" }}>
          {children}
        </main>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0a0a0a", color: "#ffffff" }}>
      <header style={{ position: "sticky", top: 0, zIndex: 30, height: "52px", backgroundColor: "#000000", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", padding: "0 16px", gap: "12px" }}>
        <button
          onClick={() => setDrawerOpen((v) => !v)}
          aria-label="Open navigation"
          style={{ background: "transparent", border: "none", cursor: "pointer", color: "#aaaaaa", fontSize: "1.25rem", padding: "6px", borderRadius: "6px", lineHeight: 1, flexShrink: 0 }}
        >
          ☰
        </button>
        <Link href="/admin/plans" style={{ textDecoration: "none", flex: 1 }}>
          <span style={{ fontSize: "1rem", fontWeight: 800, color: "#c9a84c" }}>NK Admin</span>
        </Link>
        <Link href="/services" style={{ fontSize: "0.8rem", color: "#555555", textDecoration: "none", padding: "6px 10px" }}>
          ← Site
        </Link>
        <button onClick={handleLogout} style={{ background: "transparent", border: "none", cursor: "pointer", fontSize: "0.8rem", color: "#555555", padding: "6px 10px" }}>
          Logout
        </button>
      </header>

      {drawerOpen && (
        <div onClick={closeDrawer} style={{ position: "fixed", inset: 0, zIndex: 40, background: "rgba(0,0,0,0.5)" }} />
      )}

      <aside style={{ position: "fixed", top: 0, left: 0, height: "100vh", width: "260px", backgroundColor: "#000000", borderRight: "1px solid rgba(255,255,255,0.07)", display: "flex", flexDirection: "column", zIndex: 50, transform: drawerOpen ? "translateX(0)" : "translateX(-100%)", transition: "transform 0.22s ease", overflowY: "auto" }}>
        <div style={{ height: "52px", display: "flex", alignItems: "center", padding: "0 16px", gap: "12px", borderBottom: "1px solid rgba(255,255,255,0.07)", flexShrink: 0 }}>
          <button onClick={closeDrawer} aria-label="Close navigation" style={{ background: "transparent", border: "none", cursor: "pointer", color: "#aaaaaa", fontSize: "1.25rem", padding: "6px", borderRadius: "6px", lineHeight: 1 }}>
            ☰
          </button>
          <span style={{ fontSize: "1rem", fontWeight: 800, color: "#c9a84c" }}>NK Admin</span>
        </div>
        {sidebarContent}
      </aside>

      <main style={{ minWidth: 0, overflowY: "auto" }}>
        {children}
      </main>
    </div>
  );
}
