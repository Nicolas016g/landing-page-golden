"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

const photos = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  label: `Foto do empreendimento ${i + 1}`,
}));

export function GallerySection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + photos.length) % photos.length);
  const next = () => setActive((i) => (i + 1) % photos.length);

  return (
    <section id="fotos" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Galeria"
            title="Fotos do projeto"
            subtitle="Conheça o Residencial Parque Vista Bárbara."
            align="center"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="relative mt-12">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="flex h-64 items-center justify-center bg-gradient-to-br from-primary/80 to-primary-light md:h-96">
              <div className="text-center text-white">
                <Home className="mx-auto h-16 w-16 opacity-80" />
                <p className="mt-4 text-lg font-bold">{photos[active].label}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={prev}
              className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5 text-primary" />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg"
              aria-label="Próxima"
            >
              <ChevronRight className="h-5 w-5 text-primary" />
            </button>
          </div>
          <div className="mt-4 flex justify-center gap-2">
            {photos.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${i === active ? "w-8 bg-primary" : "w-2 bg-border"}`}
                aria-label={`Foto ${i + 1}`}
              />
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-text-muted">* Imagens meramente ilustrativas</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
