import { Building2, Home, Ruler, Trees } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

const pillars = [
  {
    icon: Home,
    title: "Casas prontas",
    text: "Unidades com 2 dormitórios, sala, cozinha, banheiro e vaga de garagem.",
  },
  {
    icon: Ruler,
    title: "Terrenos a partir de 154 m²",
    text: "Quintal privativo para lazer, churrasco e mais conforto no dia a dia.",
  },
  {
    icon: Trees,
    title: "Bairro planejado",
    text: "Infraestrutura completa pensada para morar bem, com segurança e praticidade.",
  },
  {
    icon: Building2,
    title: "Golden City",
    text: "Mais de 3.750 imóveis entregues em Sorocaba e região.",
  },
];

export function AboutSection() {
  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Sobre o empreendimento"
            title="Infraestrutura completa no Parque Vista Bárbara"
            subtitle="O bairro foi planejado para você viver bem, com segurança e praticidade."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div className="card card-hover h-full p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-bold text-primary-dark">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2} className="mt-12">
          <div className="highlight-box rounded-2xl text-center">
            <p className="text-lg font-bold text-primary-dark">Status da obra: 100% Concluído Pronto para morar.</p>
            <p className="mt-2 text-sm text-text-muted">
              Excelente oportunidade com entrada facilitada, parcelamento direto e financiamento habitacional.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
