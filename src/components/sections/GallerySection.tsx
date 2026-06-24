"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

const photos = [
  {
    src: "/images/galeria/01-vista-aerea.webp",
    alt: "Vista aérea do Residencial Parque Vista Bárbara",
    label: "Vista aérea do empreendimento",
    width: 1202,
    height: 758,
  },
  {
    src: "/images/galeria/02-fachada.png",
    alt: "Fachada das casas do Parque Vista Bárbara",
    label: "Fachada das casas",
    width: 1024,
    height: 1703,
  },
  {
    src: "/images/galeria/03-sala.png",
    alt: "Sala do Residencial Parque Vista Bárbara",
    label: "Sala de estar",
    width: 1024,
    height: 576,
  },
  {
    src: "/images/galeria/04-dormitorio-1.jpg",
    alt: "Dormitório 1 do Parque Vista Bárbara",
    label: "Dormitório 1",
    width: 1024,
    height: 576,
  },
  {
    src: "/images/galeria/05-dormitorio-2.jpg",
    alt: "Dormitório 2 do Parque Vista Bárbara",
    label: "Dormitório 2",
    width: 1024,
    height: 576,
  },
  {
    src: "/images/galeria/06-banheiro.jpg",
    alt: "Banheiro do Parque Vista Bárbara",
    label: "Banheiro",
    width: 586,
    height: 692,
  },
  {
    src: "/images/galeria/07-cozinha.jpg",
    alt: "Cozinha do Parque Vista Bárbara",
    label: "Cozinha",
    width: 1024,
    height: 576,
  },
];

export function GallerySection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + photos.length) % photos.length);
  const next = () => setActive((i) => (i + 1) % photos.length);

  const current = photos[active];

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
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_8px_40px_rgba(24,64,123,0.1)]">
            <div className="relative h-64 md:h-[32rem]">
              <Image
                key={current.src}
                src={current.src}
                alt={current.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 1280px"
                priority={active === 0}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-dark/80 to-transparent px-6 py-5">
                <p className="text-lg font-bold text-white">{current.label}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={prev}
              className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-lg transition hover:scale-105"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5 text-primary" />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-lg transition hover:scale-105"
              aria-label="Próxima"
            >
              <ChevronRight className="h-5 w-5 text-primary" />
            </button>
          </div>

          <div className="mt-5 grid grid-cols-4 gap-2 sm:grid-cols-7">
            {photos.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setActive(i)}
                className={`relative aspect-[4/3] overflow-hidden rounded-lg border-2 transition-all ${
                  i === active ? "border-primary ring-2 ring-primary/20" : "border-border opacity-70 hover:opacity-100"
                }`}
                aria-label={photo.label}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="120px"
                />
              </button>
            ))}
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
