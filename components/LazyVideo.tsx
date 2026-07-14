"use client";

import { useEffect, useRef } from "react";

/**
 * Video decorativo (muto, in loop) che viene scaricato e avviato solo quando entra
 * nello schermo, e messo in pausa quando esce.
 *
 * Con il semplice autoPlay il browser scaricava tutti i video della pagina al
 * caricamento: /benessere pesava ~42MB di video anche per chi non arrivava in fondo.
 * preload="none" + play() all'ingresso in viewport: si scarica solo quel che si guarda.
 */
export default function LazyVideo({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // play() avvia anche il download, che preload="none" aveva rimandato
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return <video ref={ref} src={src} poster={poster} muted loop playsInline preload="none" />;
}
