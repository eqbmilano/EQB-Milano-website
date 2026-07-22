"use client";
import React from "react";
import Image from "next/image";
import "./FixedBackground.css";

interface FixedBackgroundProps {
  src?: string;
  alt?: string;
}

export const FixedBackground: React.FC<FixedBackgroundProps> = ({
  src = "/assets/Massaggio-viso.jpg",
  alt = "Sfondo Parallasse",
}) => {
  return (
    <div className="eqb-fixed-bg fixed inset-0 w-full h-full -z-50 pointer-events-none">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        quality={85}
        style={{ objectFit: "cover" }}
      />
      {/* Overlay opzionale per scurire leggermente se necessario */}
      <div className="absolute inset-0 bg-black/10" />
    </div>
  );
};
