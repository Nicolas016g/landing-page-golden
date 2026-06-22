import { Box, Compass, Map } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

const features = [
  { icon: Compass, title: "Navegação interativa", text: "Explore cada ambiente da casa" },
  { icon: Box, title: "Visualização 360°", text: "Veja todos os ângulos dos ambientes" },
  { icon: Map, title: "Planta interativa", text: "Navegue pela planta e visualize os espaços" },
];

export function TourSection() {
  return (
    <section id="tour" className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Tour virtual"
            title="Faça um tour no imóvel"
            subtitle="Explore os ambientes e conheça cada detalhe do seu futuro lar."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div className="card card-hover p-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-2xl">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 font-bold text-primary-dark">{item.title}</h3>
                <p className="mt-2 text-sm text-text-muted">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2} className="mt-10 text-center">
          <a href="#contato" className="btn-primary">
            Agendar visita presencial
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
