"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const G = "var(--font-garamond)";
const I = "var(--font-inter)";
const green = "#082F27";
const gold = "#C89A3B";
const cream = "#F7F2E8";

const STORAGE_KEY = "grmsc-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const existing = localStorage.getItem(STORAGE_KEY);
      if (!existing) setVisible(true);
    } catch { /* storage blocked - show banner anyway */ setVisible(true); }
  }, []);

  function save(choice: "accept" | "essential") {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ choice, ts: Date.now() }));
    } catch { /* ignore */ }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      style={{
        position: "fixed",
        left: "clamp(12px, 2vw, 24px)",
        bottom: "clamp(12px, 2vw, 24px)",
        right: "clamp(12px, 2vw, 24px)",
        maxWidth: 520,
        marginLeft: "auto",
        zIndex: 9999,
        background: green,
        color: "#fff",
        padding: "22px 24px",
        borderRadius: 6,
        boxShadow: "0 18px 48px rgba(0,0,0,0.28)",
        border: `1px solid ${gold}`,
        fontFamily: I,
      }}
    >
      <p style={{ fontFamily: I, fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.2em", color: gold, fontWeight: 700, marginBottom: 10 }}>Cookies</p>
      <p style={{ fontFamily: G, fontSize: "1.1rem", color: "#fff", lineHeight: 1.35, marginBottom: 10 }}>We use cookies on this site</p>
      <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: 18 }}>
        We use essential cookies to make this site work and, with your consent, analytics cookies to understand how it is used. For details, see our{" "}
        <Link href="/privacy-policy" style={{ color: gold, textDecoration: "underline" }}>Privacy Policy</Link>.
      </p>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <button
          type="button"
          onClick={() => save("accept")}
          style={{
            background: gold, color: green, border: "none",
            padding: "10px 18px", fontFamily: I, fontSize: "0.72rem", fontWeight: 700,
            letterSpacing: "0.14em", textTransform: "uppercase", cursor: "pointer",
            borderRadius: 2,
          }}
        >
          Allow All
        </button>
        <button
          type="button"
          onClick={() => save("essential")}
          style={{
            background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.4)",
            padding: "10px 18px", fontFamily: I, fontSize: "0.72rem", fontWeight: 700,
            letterSpacing: "0.14em", textTransform: "uppercase", cursor: "pointer",
            borderRadius: 2,
          }}
        >
          Essential Only
        </button>
      </div>
    </div>
  );
}
