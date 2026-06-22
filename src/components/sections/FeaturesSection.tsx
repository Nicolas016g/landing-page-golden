import { CheckCircle } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

const programs = [
  "Aprovação facilitada de crédito",
  "Entrada facilitada",
  "Subsídio do Governo (Minha Casa Minha Vida)",
  "Taxas de juros reduzidas",
  "Utilização de FGTS na entrada",
  "Financiamento em até 120 meses",
  "Composição de renda com até 3 pessoas",
];

export function FeaturesSection() {
  return (
    <section id="programas" className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Programas habitacionais"
            title="Realize o sonho da casa própria"
            subtitle="Aproveite as vantagens dos programas habitacionais do Governo Federal."
            align="center"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-2xl">
            <div className="highlight-box rounded-2xl">
              <ul className="space-y-4">
                {programs.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm font-medium text-primary-dark">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-text-muted">
                * A obtenção dos benefícios do governo depende da análise de cada cliente.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
