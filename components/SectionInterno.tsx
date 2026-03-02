"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./SectionInterno.css";

const slides = [
  { src: "/assets/Osteopatia.jpg", alt: "Osteopatia" },
  { src: "/assets/Pilates.jpg", alt: "Pilates" },
  { src: "/assets/Reception-Sala-Attesa.jpg", alt: "Reception e Sala Attesa" },
  { src: "/assets/Sala-Allenamento.jpg", alt: "Sala Allenamento" },
  { src: "/assets/Massaggio-viso.jpg", alt: "Massaggio Viso" },
];

export const SectionInterno: React.FC = () => {
  return (
    <section className="section-interno">
      <div className="section-interno__content">
        <span className="section-interno__label">GLI SPAZI</span>
        <h2 className="section-interno__title">
          Ambienti curati per il tuo lavoro quotidiano
        </h2>
        <p className="section-interno__body">
          Ogni spazio di EQB è progettato con attenzione ai dettagli: materiali naturali,
          luce calibrata, acustica pensata per garantire concentrazione e benessere.
        </p>
      </div>

      <div className="section-interno__carousel">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1.5}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1.2, spaceBetween: 12 },
            768: { slidesPerView: 1.5, spaceBetween: 20 },
            1200: { slidesPerView: 2.2, spaceBetween: 24 },
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.src}>
              <div className="section-interno__slide">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 768px) 85vw, 45vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
