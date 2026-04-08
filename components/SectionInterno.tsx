"use client";
import React, { useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "./SectionInterno.css";

const slides = [
  { src: "/assets/Stanza Terra.jpg",         label: "Stanza Terapia" },
  { src: "/assets/Osteopatia.jpg",            label: "Osteopatia" },
  { src: "/assets/Pilates.jpg",               label: "Pilates" },
  { src: "/assets/Sala-Allenamento.jpg",      label: "Sala Allenamento" },
  { src: "/assets/Reception-Sala-Attesa.jpg", label: "Reception" },
  { src: "/assets/Massaggio-viso.jpg",        label: "Massaggio" },
];

export const SectionInterno: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = useCallback(() => {
    if (cursorRef.current) cursorRef.current.style.opacity = "1";
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (cursorRef.current) cursorRef.current.style.opacity = "0";
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    }
  }, []);

  return (
    <section className="section-interno">

      {/* Header */}
      <div className="section-interno__header">
        <div className="section-interno__header-text">
          <span className="section-interno__label">GLI SPAZI</span>
          <h2 className="section-interno__title">
            Ambienti curati per il tuo lavoro quotidiano
          </h2>
          <p className="section-interno__body">
            Ogni spazio di EQB è progettato con attenzione ai dettagli: materiali naturali,
            luce calibrata, acustica pensata per garantire concentrazione e benessere.
          </p>
        </div>

        {/* Frecce navigazione */}
        <div className="section-interno__nav">
          <button ref={prevRef} className="interno-nav-btn interno-nav-btn--prev" aria-label="Slide precedente">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2.19571 8.57143L8.81543 15.1911L8 16L0 8L8 0L8.81543 0.808857L2.19571 7.42857L16 7.42857V8.57143L2.19571 8.57143Z" fill="currentColor"/>
            </svg>
          </button>
          <button ref={nextRef} className="interno-nav-btn interno-nav-btn--next" aria-label="Slide successiva">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M13.8043 7.42857L7.18457 0.808857L8 0L16 8L8 16L7.18457 15.1911L13.8043 8.57143H0V7.42857L13.8043 7.42857Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div
        className="section-interno__carousel-wrap"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <Swiper
          modules={[Navigation]}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation === "object" && swiper.params.navigation) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          slidesPerView={1.1}
          spaceBetween={12}
          breakpoints={{
            640:  { slidesPerView: 2.1, spaceBetween: 12 },
            1024: { slidesPerView: 3.1, spaceBetween: 16 },
          }}
          grabCursor
          className="interno-swiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.src} className="interno-slide">
              <div className="interno-slide__image-wrap">
                <div
                  className="interno-slide__image"
                  style={{ backgroundImage: `url(${slide.src})` }}
                />
              </div>
              <span className="interno-slide__label">{slide.label}</span>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Cursore drag custom */}
        <div ref={cursorRef} className="interno-cursor">Drag</div>
      </div>

    </section>
  );
};
