import { Mail, MapPin, Phone } from "lucide-react";
import { LeadForm } from "../ui/LeadForm";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

export function ContactSection() {
  return (
    <section id="contato" className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Contato"
            title="Entre em contato e compre direto com a incorporadora"
            subtitle="Fale com nossos especialistas e garanta sua casa com as melhores condições."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
          <ScrollReveal delay={0.1}>
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="font-bold text-primary-dark">Plantão de Vendas</h3>
                <p className="mt-3 flex items-start gap-3 text-sm text-text-muted">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  Av. Sandro Antônio Mendes, 1.250 — Sorocaba/SP
                </p>
              </div>
              <a href="tel:+5515996642444" className="flex items-center gap-3 font-medium text-primary-dark hover:text-primary">
                <Phone className="h-5 w-5 text-primary" />
                Vendas: (15) 99664-2444
              </a>
              <a href="tel:+551130632566" className="flex items-center gap-3 font-medium text-primary-dark hover:text-primary">
                <Phone className="h-5 w-5 text-primary" />
                Escritório: (11) 3063-2566
              </a>
              <a href="mailto:contato@goldencity.com.br" className="flex items-center gap-3 text-text-muted hover:text-primary">
                <Mail className="h-5 w-5 text-primary" />
                contato@goldencity.com.br
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <LeadForm id="lead-form-contato" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
