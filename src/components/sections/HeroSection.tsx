"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { GoldenCityLogo } from "../ui/GoldenCityLogo";
import { LeadForm } from "../ui/LeadForm";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-parque-vista-barbara.webp')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/88 via-primary/78 to-primary-dark/92" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col px-4 pb-16 pt-24 md:px-6 md:pb-20 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-10"
        >
          <GoldenCityLogo variant="hero" className="max-w-[220px] md:max-w-[280px]" />
        </motion.div>

        <div className="grid flex-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-2 text-white lg:order-1"
          >
            <span className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
              Pronto para morar
            </span>

            <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-[2.6rem]">
              Residencial Parque Vista Bárbara
            </h1>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/20 shadow-[0_16px_48px_rgba(0,0,0,0.35)]">
              <Image
                src="/images/empreendimento-fachada.png"
                alt="Fachada do Residencial Parque Vista Bárbara"
                width={768}
                height={1277}
                className="h-auto w-full max-h-[420px] object-cover object-center"
                priority
              />
            </div>

            <p className="mt-5 max-w-xl text-lg font-medium leading-relaxed text-white/90 md:text-xl">
              Casas com 2 dormitórios, quintal privativo e terreno a partir de 154 m²
            </p>

            <p className="mt-3 flex items-center gap-2 text-sm font-medium text-white/75">
              <MapPin className="h-4 w-4 shrink-0 text-accent-light" />
              Tudo isso no melhor da Zona Norte de Sorocaba
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <LeadForm compact />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
