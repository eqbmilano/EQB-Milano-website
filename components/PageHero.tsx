import React from "react";
import Image from "next/image";
import "./PageHero.css";

interface PageHeroProps {
  title: string;
  imageSrc: string;
  imageAlt?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({ title, imageSrc, imageAlt = "" }) => (
  <div className="page-hero">
    <Image
      src={imageSrc}
      alt={imageAlt || title}
      fill
      priority
      quality={90}
      className="page-hero__image"
      sizes="100vw"
    />
    <div className="page-hero__overlay" />
    <h1 className="page-hero__title">{title}</h1>
  </div>
);
