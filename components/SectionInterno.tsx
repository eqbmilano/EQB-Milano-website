"use client";
import React, { useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import "swiper/css";
import "./SectionInterno.css";

const slides = [
  {
    src: "/assets/01_Terapia_Manuale.jpeg",
    label: "Terapia Manuale",
    href: "#terapia-manuale",
    items: ["OSTEOPATIA", "FISIOTERAPIA", "MASSOTERAPIA"],
  },
  {
    src: "/assets/02_Pilates_e_Yoga.jpeg",
    label: "Pilates e Yoga",
    href: "#pilates-yoga",
    items: ["INDIVIDUALI", "DUETTI", "GRUPPI"],
  },
  {
    src: "/assets/03_Personal_Training.jpeg",
    label: "Personal Training",
    href: "#personal-training",
    items: ["ALL. POSTURALE", "ALL. FUNZIONALE", "CALISTHENICS"],
  },
  {
    src: "/assets/04_Relax.jpeg",
    label: "Relax",
    href: "#relax",
    items: ["MASSAGGI", "RIFLESSOLOGIA", "AROMATOUCH"],
  },
  {
    src: "/assets/05_Consulenza.jpeg",
    label: "Consulenza",
    href: "#consulenza",
    items: ["NUTRIZIONE", "PSICOTERAPIA", "MENTAL COACH"],
  },
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
          <span className="section-interno__label">BENESSERE</span>
          <h2 className="section-interno__title">
            All&rsquo;interno di EQB
          </h2>
          <p className="section-interno__body">
            Un unico luogo dove trattamento, movimento e recupero non si alternano,
            ma si incontrano — perché il benessere vero nasce quando tutto lavora insieme.
          </p>
        </div>

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

                {/* Overlay: blur pieno + voci centrate + ESPLORA */}
                <div className="interno-overlay">
                  <div className="interno-overlay__content">
                    <ul className="interno-overlay__list">
                      {slide.items.map((item) => (
                        <li key={item} className="interno-overlay__item">{item}</li>
                      ))}
                    </ul>
                    <div className="interno-overlay__esplora">
                      <div className="interno-overlay__esplora-btn">
                        {/*
                          ViewBox 128×36 — corrisponde esattamente al button (8rem×2.25rem a 16px base)
                          rx=18 (height/2) → pill perfetto
                          Due path speculari che partono dal basso-centro (64,36)
                          e si incontrano al top-centro (64,0)
                          Perimetro di ciascun path: 46 + π*18 + 46 = 148.55 ≈ 149
                        */}
                        <svg
                          className="interno-overlay__esplora-svg"
                          viewBox="0 0 128 36"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path className="esplora-path" d="M 64 36 L 18 36 A 18 18 0 0 1 18 0 L 64 0" />
                          <path className="esplora-path" d="M 64 36 L 110 36 A 18 18 0 0 0 110 0 L 64 0" />
                        </svg>
                        <span className="interno-overlay__esplora-text">ESPLORA</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Link invisibile sull'intera card */}
                <a
                  href={slide.href}
                  className="interno-slide__link-full"
                  aria-label={`Scopri ${slide.label}`}
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
