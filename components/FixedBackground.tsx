"use client";
import React from "react";
import Image from "next/image";

export const FixedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-50 pointer-events-none">
      <Image
        src="/assets/Massaggio-viso.jpg"
        alt="Sfondo Parallasse"
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
