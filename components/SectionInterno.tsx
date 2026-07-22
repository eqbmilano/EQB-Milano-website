"use client";
import React, { useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import { useLocale, useTranslations } from "next-intl";
import { Reveal } from "./Reveal";
import "swiper/css";
import "./SectionInterno.css";

const SLIDE_ASSETS = [
  "/assets/01_Terapia_Manuale.jpeg",
  "/assets/02_Pilates_e_Yoga.jpeg",
  "/assets/03_Personal_Training.jpeg",
  "/assets/04_Relax.jpeg",
  "/assets/05_Consulenza.jpeg",
];

type Slide = { label: string; items: string[] };

export const SectionInterno: React.FC = () => {
  const locale = useLocale();
  const t = useTranslations("home.interno");
  const slides = (t.raw("slides") as Slide[]).map((s, i) => ({ ...s, src: SLIDE_ASSETS[i] }));
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
          <Reveal>
            <span className="section-interno__label">{t("label")}</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section-interno__title">
              {t("title")}
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="section-interno__body">
              {t("body")}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <a href={`/${locale}/benessere`} className="interno-cta">{t("cta")}</a>
          </Reveal>
        </div>

        <div className="section-interno__nav">
          <div className="interno-nav-arrows">
            <button ref={prevRef} className="interno-nav-btn interno-nav-btn--prev" aria-label={t("prevSlide")}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2.19571 8.57143L8.81543 15.1911L8 16L0 8L8 0L8.81543 0.808857L2.19571 7.42857L16 7.42857V8.57143L2.19571 8.57143Z" fill="currentColor"/>
              </svg>
            </button>
            <button ref={nextRef} className="interno-nav-btn interno-nav-btn--next" aria-label={t("nextSlide")}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13.8043 7.42857L7.18457 0.808857L8 0L16 8L8 16L7.18457 15.1911L13.8043 8.57143H0V7.42857L13.8043 7.42857Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
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
          modules={[Navigation, Mousewheel]}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation === "object" && swiper.params.navigation) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          slidesPerView={1.1}
          spaceBetween={1}
          breakpoints={{
            640:  { slidesPerView: 2.1, spaceBetween: 1 },
            1024: { slidesPerView: 3.1, spaceBetween: 1 },
          }}
          mousewheel={{ forceToAxis: true }}
          grabCursor
          className="interno-swiper"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={slide.src} className="interno-slide">
              <span className="interno-slide__number">{String(i + 1).padStart(2, "0")}</span>

              <div className="interno-slide__image-wrap">
                <div
                  className="interno-slide__image"
                  style={{ backgroundImage: `url('${slide.src}')` }}
                />

                {/* Overlay: blur pieno + voci centrate */}
                <div className="interno-overlay">
                  <div className="interno-overlay__content">
                    <ul className="interno-overlay__list">
                      {slide.items.map((item) => (
                        <li key={item} className="interno-overlay__item">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <span className="interno-slide__label">{slide.label}</span>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Cursore drag custom */}
        <div ref={cursorRef} className="interno-cursor">{t("trascina")}</div>
      </div>

    </section>
  );
};
