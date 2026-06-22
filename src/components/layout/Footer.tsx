"use client";

import { GoldenCityLogo } from "../ui/GoldenCityLogo";
import { ProjectLogo } from "../ui/ProjectLogo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-primary-dark text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <ProjectLogo variant="footer" />
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Casas com 2 dormitórios, quintal privativo e infraestrutura completa em Sorocaba.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white">Escritório Administrativo</h4>
            <p className="mt-3 text-sm">Rua Duque de Caxias, 124 — Sala 104</p>
            <p className="text-sm">Vila Leão, Sorocaba/SP</p>
            <p className="mt-3 text-sm">
              <strong className="text-white">Escritório:</strong> (11) 3063-2566
            </p>
            <p className="text-sm">
              <strong className="text-white">Vendas:</strong> (15) 99664-2444
            </p>
            <p className="mt-3 text-sm">
              <strong className="text-white">Email:</strong> contato@goldencity.com.br
            </p>
            <p className="text-sm">
              <strong className="text-white">Site:</strong> www.goldencity.com.br
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white">Redes Sociais</h4>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <a
                href="https://www.instagram.com/goldencityempreendimentos/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/construtoragoldencity"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Facebook
              </a>
              <a
                href="https://wa.me/5515996642444?text=Olá, tenho interesse no Parque Vista Bárbara."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center border-t border-white/10 pt-10">
          <GoldenCityLogo variant="footer" className="max-w-[min(100%,320px)]" />
        </div>

        <p className="mt-8 text-center text-xs text-white/50">
          © 2026 Residencial Parque Vista Bárbara — GC Golden City. Todos os direitos reservados. | CRECI: 25358-J
        </p>
        <p className="mt-2 text-center text-[10px] text-white/40">
          As perspectivas são artísticas e ilustrativas de acordo com memorial descritivo e contrato.
        </p>
      </div>
    </footer>
  );
}
