import {
  Bus,
  MapPin,
  ShoppingBag,
  School,
  Stethoscope,
  Store,
} from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

const nearby = [
  { icon: Bus, label: "Terminal BRT", time: "próximo" },
  { icon: MapPin, label: "Av. Itavuvu", time: "fácil acesso" },
  { icon: ShoppingBag, label: "Shopping Cidade", time: "próximo" },
  { icon: School, label: "Escolas e creches", time: "1 min" },
  { icon: Store, label: "Supermercados", time: "1 min" },
  { icon: Stethoscope, label: "Postos de saúde", time: "2 min" },
];

export function MarketSection() {
  return (
    <section id="localizacao" className="section-padding relative bg-surface">
      <div className="pattern-dots absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Localização"
            title="Região de fácil acesso"
            subtitle="Zona Norte de Sorocaba — próximo a comércio, serviços e principais vias da cidade."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <ScrollReveal delay={0.1}>
            <div className="card card-hover overflow-hidden">
              <div className="flex h-56 items-center justify-center bg-gradient-to-br from-primary via-primary-light to-[#1a5a9e]">
                <div className="text-center text-white">
                  <MapPin className="mx-auto h-12 w-12 text-accent" />
                  <p className="mt-4 text-xl font-bold">Plantão de Vendas</p>
                  <p className="mt-2 text-sm text-white/85">Av. Sandro Antônio Mendes, 1.250</p>
                  <p className="text-sm text-white/85">Sorocaba — SP</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <h3 className="text-xl font-extrabold text-primary-dark">Próximo a você</h3>
            <p className="mt-2 text-sm text-text-muted">Tempos de acesso aproximados do empreendimento</p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {nearby.map(({ icon: Icon, label, time }) => (
                <div key={label} className="card flex flex-col items-center p-4 text-center">
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="mt-2 text-xs font-bold text-primary-dark">{label}</span>
                  <span className="mt-1 text-[10px] text-text-muted">{time}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
