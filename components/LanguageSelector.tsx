"use client";

import React, { useState } from "react";
import "./LanguageSelector.css";

type Language = "it" | "en";

interface LanguageSelectorProps {
  onLanguageChange?: (lang: Language) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  onLanguageChange,
}) => {
  const [currentLang, setCurrentLang] = useState<Language>("it");

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    onLanguageChange?.(lang);
    // TODO: Implementare i18n per tradurre il sito
  };

  return (
    <div className="language-selector">
      <button
        className={`lang-button ${currentLang === "it" ? "active" : ""}`}
        onClick={() => handleLanguageChange("it")}
        title="Italiano"
        aria-label="Switch to Italian"
      >
        <span className="lang-flag">🇮🇹</span>
      </button>

      <div className="lang-separator" aria-hidden="true">
        |
      </div>

      <button
        className={`lang-button ${currentLang === "en" ? "active" : ""}`}
        onClick={() => handleLanguageChange("en")}
        title="English"
        aria-label="Switch to English"
      >
        <span className="lang-flag">🇬🇧</span>
      </button>
    </div>
  );
};
