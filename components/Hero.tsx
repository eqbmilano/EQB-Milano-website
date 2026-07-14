import React from "react";
import { CTAButton } from "./CTAButton";
import "./Hero.css";

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <video
        className="hero__video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/assets/Hero-Poster.jpg"
      >
        <source src="/assets/Video-Home.mp4" type="video/mp4" />
      </video>

      <div className="hero__overlay" />

      <div className="hero__content">
        <span className="hero__label hero__anim hero__anim--1">MILANO</span>
        <h1 className="hero__title hero__anim hero__anim--2">
          Wellness &amp; Fitness Coworking
        </h1>
        <p className="hero__vision">
          <span className="hero__vision-word hero__vision-word--1">Spazio</span>
          <span className="hero__vision-sep hero__vision-sep--1" />
          <span className="hero__vision-word hero__vision-word--2">Relazioni</span>
          <span className="hero__vision-sep hero__vision-sep--2" />
          <span className="hero__vision-word hero__vision-word--3">Crescita</span>
        </p>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
};
