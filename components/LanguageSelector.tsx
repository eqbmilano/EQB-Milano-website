"use client";

import React, { useState } from "react";
import "./LanguageSelector.css";

type Language = "it" | "en";

export const LanguageSelector: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<Language>("it");

  const languages: { code: Language; flag: string; label: string }[] = [
    { code: "it", flag: "🇮🇹", label: "IT" },
    { code: "en", flag: "🇬🇧", label: "EN" },
  ];

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    // Here you can add logic to change the actual language
    // For now, it's just visual feedback
    console.log("Language changed to:", lang);
  };

  return (
    <div className="language-selector">
      {languages.map((lang) => (
        <button
          key={lang.code}
          className={`lang-button ${currentLang === lang.code ? "active" : ""}`}
          onClick={() => handleLanguageChange(lang.code)}
          aria-label={`Switch to ${lang.label}`}
          title={lang.label}
        >
          <span className="flag">{lang.flag}</span>
        </button>
      ))}
    </div>
  );
};
