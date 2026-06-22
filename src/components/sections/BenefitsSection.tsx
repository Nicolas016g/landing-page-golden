import {
  Car,
  Fence,
  Lightbulb,
  Shield,
  Trees,
  Wifi,
} from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

const amenities = [
  { icon: Shield, label: "Segurança e acesso controlado" },
  { icon: Lightbulb, label: "Iluminação pública" },
  { icon: Trees, label: "Áreas verdes" },
  { icon: Car, label: "Vagas de garagem" },
  { icon: Fence, label: "Quintal privativo" },
  { icon: Wifi, label: "Infraestrutura de rede" },
];

export function BenefitsSection() {
  return (
    <section id="lazer" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Infraestrutura"
            title="Lazer e comodidades do bairro"
            subtitle="Mais do que uma casa — um estilo de vida completo, com todo o conforto que você merece."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.06}>
              <div className="card card-hover flex items-center gap-4 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="font-semibold text-primary-dark">{item.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
