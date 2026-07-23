"use client";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import { Reveal } from "./Reveal";
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
  const wrapRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  // Slide con l'overlay attivita' aperto (tap-to-reveal su mobile).
  const [flipped, setFlipped] = useState<number | null>(null);

  // Il tooltip "Trascina" non si affida solo a mouseenter/mouseleave sul wrap:
  // durante un vero swipe (non il semplice hover) Swiper interrompe la
  // propagazione dei suoi eventi mouse (stopPropagation interno), quindi
  // mousemove/mouseup non arrivano più nemmeno a un listener su window in
  // fase di cattura — il tooltip resta bloccato all'ultima posizione.
  // La fonte di verità affidabile è l'evento touchEnd DI SWIPER stesso (deve
  // per forza scattare per far scattare lo snap della slide, vedi onTouchEnd
  // sul componente <Swiper> più sotto), che forza la chiusura del tooltip a
  // fine gesto indipendentemente da cosa succede ai mouse event nativi.
  useEffect(() => {
    const wrap = wrapRef.current;
    const cursor = cursorRef.current;
    if (!wrap || !cursor) return;

    const isInside = (x: number, y: number) => {
      const r = wrap.getBoundingClientRect();
      return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;
    };

    const onMove = (e: MouseEvent) => {
      const inside = isInside(e.clientX, e.clientY);
      cursor.style.opacity = inside ? "1" : "0";
      if (inside) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };
    const hide = () => { cursor.style.opacity = "0"; };

    window.addEventListener("mousemove", onMove, { capture: true });
    window.addEventListener("mouseup", hide, { capture: true });
    window.addEventListener("blur", hide);
    document.addEventListener("mouseleave", hide);
    return () => {
      window.removeEventListener("mousemove", onMove, { capture: true });
      window.removeEventListener("mouseup", hide, { capture: true });
      window.removeEventListener("blur", hide);
      document.removeEventListener("mouseleave", hide);
    };
  }, []);

  return (
    <section className="section-interno">

      {/* Header */}
      <div className="section-interno__header">
        <div className="section-interno__header-text">
          <Reveal>
            <span className="section-interno__label">BENESSERE</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section-interno__title">
              All&rsquo;interno di EQB
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="section-interno__body">
              Un unico luogo dove trattamento, movimento e recupero non si alternano,
              ma si incontrano, perché il benessere vero nasce quando tutto lavora insieme.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <a href="/benessere" className="interno-cta">Scopri i nostri servizi</a>
          </Reveal>
        </div>

        <div className="section-interno__nav">
          <div className="interno-nav-arrows">
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
      </div>

      {/* Carousel */}
      <div className="section-interno__carousel-wrap" ref={wrapRef}>
        <Reveal delay={120} className="interno-carousel-reveal">
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
          onTouchEnd={() => { if (cursorRef.current) cursorRef.current.style.opacity = "0"; }}
          className="interno-swiper"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={slide.src} className={`interno-slide${flipped === i ? " is-flipped" : ""}`}>
              <span className="interno-slide__number">{String(i + 1).padStart(2, "0")}</span>

              <div
                className="interno-slide__image-wrap"
                onClick={() => setFlipped(flipped === i ? null : i)}
              >
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
                <span className="interno-tap-hint" aria-hidden="true"><span className="interno-tap-hint__ring" /></span>
              </div>

              <span className="interno-slide__label">{slide.label}</span>
            </SwiperSlide>
          ))}
        </Swiper>
        </Reveal>

        {/* Cursore drag custom */}
        <div ref={cursorRef} className="interno-cursor">Trascina</div>
      </div>

    </section>
  );
};
