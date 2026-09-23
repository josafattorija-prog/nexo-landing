"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "./atoms";
import { Brand } from "@/components/brand";

export default function DemoReel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [soundOn, setSoundOn] = useState(false);

  // Pausa el video cuando sale de pantalla y lo reanuda al volver (ahorra CPU/batería).
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.35 }
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  function toggleSound() {
    const video = videoRef.current;
    if (!video) return;
    const next = !soundOn;
    video.muted = !next;
    if (next) video.play().catch(() => {});
    setSoundOn(next);
  }

  return (
    <section className="section tight" id="demo">
      <div className="shell">
        <div className="section-head center">
          <Reveal><span className="eyebrow">Demo · 45 segundos</span></Reveal>
          <Reveal delay={80}>
            <h2>Mira a <Brand /> <span className="em">trabajar</span>.</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="lead">
              Sin narración: la IA genera la ficha, responde WhatsApp, califica al lead
              y mueve la operación hasta el cierre.
            </p>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <div className="demo-frame">
            <video
              ref={videoRef}
              src="/nexo-demo.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Demo NexoAI — la IA trabajando"
              onClick={toggleSound}
            />
            <button
              type="button"
              className="demo-sound"
              onClick={toggleSound}
              aria-pressed={soundOn}
              aria-label={soundOn ? "Silenciar" : "Activar sonido"}
            >
              {soundOn ? "🔊 Sonido activado" : "🔇 Activar sonido"}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
