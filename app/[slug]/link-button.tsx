"use client";

import { useState } from "react";

export function LinkButton({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        background: hovered ? "#322523" : "#fff",
        border: `1px solid ${hovered ? "#322523" : "#D4CFC9"}`,
        borderRadius: 14,
        padding: "14px 18px",
        textDecoration: "none",
        color: hovered ? "#fff" : "#322523",
        fontSize: 14,
        fontWeight: 500,
        transition: "all 0.18s ease",
        cursor: "pointer",
      }}
    >
      <span style={{ opacity: 0.7, display: "flex", flexShrink: 0 }}>{icon}</span>
      <span>{label}</span>
      <span style={{ marginLeft: "auto", opacity: 0.4, fontSize: 12 }}>→</span>
    </a>
  );
}
