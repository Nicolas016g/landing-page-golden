import Image from "next/image";
import {
  Clock,
  Home,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  CheckCircle2,
} from "lucide-react";
import { LeadForm } from "../ui/LeadForm";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

const highlights = [
  "Casas com 2 dormitórios e quintal privativo",
  "Terrenos a partir de 154 m²",
  "Pronto para morar — 100% concluído",
  "Entrada facilitada e financiamento em até 120 meses",
];

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

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-stretch">
          <ScrollReveal delay={0.1} className="h-full">
            <div className="card-premium flex h-full flex-col overflow-hidden">
              <div className="relative h-48 shrink-0 sm:h-56">
                <Image
                  src="/images/galeria/01-vista-aerea.webp"
                  alt="Vista aérea do plantão de vendas — Parque Vista Bárbara"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/80">
                    Golden City
                  </p>
                  <h3 className="mt-1 text-2xl font-extrabold">Plantão de Vendas</h3>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-5 p-6">
                <div className="flex items-start gap-3 rounded-xl border border-border bg-surface/60 p-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-bold text-primary-dark">Endereço do plantão</p>
                    <p className="mt-1 text-sm leading-relaxed text-text-muted">
                      Av. Sandro Antônio Mendes, 1.250
                      <br />
                      Sorocaba/SP
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-border bg-surface/60 p-4">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-bold text-primary-dark">Atendimento</p>
                    <p className="mt-1 text-sm text-text-muted">
                      Segunda a sábado, com corretores especializados para visitas, simulações e
                      reservas de unidades.
                    </p>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-text-muted">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto space-y-3 border-t border-border pt-5">
                  <a
                    href="tel:+5515996642444"
                    className="flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3 font-semibold text-primary-dark transition hover:border-primary/30 hover:bg-primary/5"
                  >
                    <Phone className="h-5 w-5 text-primary" />
                    Vendas: (15) 99664-2444
                  </a>
                  <a
                    href="https://wa.me/5515996642444?text=Olá, tenho interesse no Parque Vista Bárbara."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 font-semibold text-white transition hover:bg-[#20bd5a]"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Chamar no WhatsApp
                  </a>
                  <a
                    href="tel:+551130632566"
                    className="flex items-center gap-3 px-1 text-sm font-medium text-primary-dark hover:text-primary"
                  >
                    <Phone className="h-4 w-4 text-primary" />
                    Escritório: (11) 3063-2566
                  </a>
                  <a
                    href="mailto:contato@goldencity.com.br"
                    className="flex items-center gap-3 px-1 text-sm text-text-muted hover:text-primary"
                  >
                    <Mail className="h-4 w-4 text-primary" />
                    contato@goldencity.com.br
                  </a>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-primary/5 p-4">
                  <Home className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div className="text-sm">
                    <p className="font-bold text-primary-dark">Escritório administrativo</p>
                    <p className="mt-1 text-text-muted">
                      Rua Duque de Caxias, 124 — Sala 104
                      <br />
                      Vila Leão, Sorocaba/SP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="h-full">
            <LeadForm id="lead-form-contato" className="h-full" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
