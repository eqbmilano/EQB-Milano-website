"use client";
import React, { useState } from "react";
import Link from "next/link";

export function ClienteSwitch() {
  const [closed, setClosed] = useState(false);
  if (closed) return null;

  return (
    <div className="ee-switch" role="complementary">
      <Link href="/benessere" className="ee-switch__link">
        <span className="ee-switch__dot" aria-hidden="true" />
        <span className="ee-switch__text">
          Cerchi benessere per te? <strong>Vai ai trattamenti</strong>
        </span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </Link>
      <button className="ee-switch__close" onClick={() => setClosed(true)} aria-label="Chiudi">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </div>
  );
}
