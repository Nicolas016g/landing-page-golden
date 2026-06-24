"use client";

import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary-dark via-primary to-primary-light py-16 md:py-20">
      <div className="relative mx-auto max-w-7xl px-4 text-center md:px-6">
        <ScrollReveal>
          <h2 className="text-2xl font-extrabold text-white md:text-4xl">
            Pague em até 120 meses
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">
            Fácil aprovação de crédito. Simule seu financiamento agora e realize o sonho da casa própria.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="#contato" className="btn-accent !px-10">
            Fale com um corretor
            <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href="tel:+5515996642444"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm hover:bg-white/20"
          >
            <Phone className="h-5 w-5" />
            (15) 99664-2444
          </a>
          <a
            href="https://wa.me/5515996642444?text=Olá, tenho interesse no Parque Vista Bárbara."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#25d366] px-8 py-4 font-semibold text-white hover:bg-[#20bd5a]"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
