"use client";
import React from "react";
import "./ParallaxDivider.css";

interface ParallaxDividerProps {
  src?: string;
  text?: string;
}

export const ParallaxDivider: React.FC<ParallaxDividerProps> = ({ src, text }) => {
  if (!src) {
    return <div className="parallax-divider" aria-hidden="true" />;
  }

  return (
    <div
      className="parallax-divider parallax-divider--own"
      style={{ backgroundImage: `url('${src}')` }}
      aria-hidden={!text}
    >
      <div className="parallax-divider__overlay" />
      {text && (
        <div className="parallax-divider__content">
          <p className="parallax-divider__text">{text}</p>
        </div>
      )}
    </div>
  );
};
