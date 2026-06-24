import { ArrowRight, Check } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

const units = [
  {
    name: "Casa Tipo A",
    area: "77 m²",
    terrain: "Apartir de 154 m²",
    highlight: false,
    features: ["2 dormitórios", "Sala, cozinha e banheiro", "Quintal privativo", "1 vaga de garagem"],
  },
  {
    name: "Casa Tipo B",
    area: "77 m²",
    terrain: "Apartir de 154 m²",
    highlight: true,
    features: ["2 dormitórios", "Sala, cozinha e banheiro", "Quintal privativo", "1 vaga de garagem"],
  },
];

export function PricingSection() {
  return (
    <section id="plantas" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Plantas e tipologias"
            title="Casas prontas para morar"
            subtitle="A casa própria que você sempre sonhou já está para receber a sua família."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {units.map((unit, i) => (
            <ScrollReveal key={unit.name} delay={i * 0.1}>
              <div
                className={`card card-hover relative flex h-full flex-col overflow-hidden ${
                  unit.highlight ? "ring-2 ring-accent" : ""
                }`}
              >
                {unit.highlight && (
                  <span className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-bold text-primary-dark">
                    Destaque
                  </span>
                )}
                <div className="flex h-44 items-center justify-center bg-gradient-to-br from-primary/90 to-primary-light">
                  <div className="text-center text-white">
                    <p className="text-3xl font-extrabold">{unit.area}</p>
                    <p className="text-sm text-white/80">área construída</p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-extrabold text-primary-dark">{unit.name}</h3>
                  <p className="mt-1 text-sm text-text-muted">Terreno {unit.terrain}</p>
                  <ul className="mt-5 flex-1 space-y-2">
                    {unit.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-text-muted">
                        <Check className="h-4 w-4 shrink-0 text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#contato" className="btn-outline mt-6 w-full text-center">
                    Solicitar informações
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
