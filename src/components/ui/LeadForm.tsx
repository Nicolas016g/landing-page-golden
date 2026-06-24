"use client";

import { Loader2, Lock, Send, Home } from "lucide-react";
import { useState } from "react";

interface LeadFormProps {
  id?: string;
  title?: string;
  subtitle?: string;
  compact?: boolean;
  className?: string;
}

export function LeadForm({
  id = "lead-form",
  title = "Entre em Contato",
  subtitle = "Preencha o formulário e compre direto com a incorporadora.",
  compact = false,
  className = "",
}: LeadFormProps) {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };

  if (sent) {
    return (
      <div className={`card-premium p-8 text-center ${className}`} id={id}>
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl text-white">
          ✓
        </div>
        <h3 className="text-lg font-extrabold text-primary-dark">Mensagem enviada!</h3>
        <p className="mt-2 text-sm text-text-muted">Um corretor entrará em contato em breve.</p>
      </div>
    );
  }

  return (
    <div className={`card-premium relative flex h-full flex-col overflow-hidden ${className}`} id={id}>
      <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-primary via-primary-light to-accent" />
      <div className="border-b border-border/60 bg-gradient-to-r from-primary/5 to-accent/5 px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
            <Home className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-primary-dark">{title}</h3>
            <p className="text-xs text-text-muted">{subtitle}</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-1 flex-col space-y-4 p-6">
        {!compact && (
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-primary-dark">Nome completo *</label>
            <input required type="text" placeholder="Seu nome" className="input-field" />
          </div>
        )}
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-primary-dark">E-mail *</label>
          <input required type="email" placeholder="seu@email.com" className="input-field" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-primary-dark">Telefone / WhatsApp *</label>
          <input required type="tel" placeholder="(15) 99999-9999" className="input-field" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-primary-dark">Interesse *</label>
          <select required className="input-field" defaultValue="">
            <option value="" disabled>Selecione</option>
            <option value="casa-50">Casa 77 m² — 2 dormitórios</option>
            <option value="casa-53">Casa 77 m² — 2 dormitórios</option>
            <option value="financiamento">Simular financiamento</option>
            <option value="visita">Agendar visita</option>
          </select>
        </div>
        {!compact && (
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-primary-dark">Mensagem</label>
            <textarea rows={3} placeholder="Como podemos ajudar?" className="input-field resize-none" />
          </div>
        )}
        <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-70">
          {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
          Solicitar orçamento
        </button>
        <p className="flex items-center justify-center gap-1.5 text-center text-[11px] text-text-muted">
          <Lock className="h-3 w-3" />
          Dados protegidos · Sem compromisso
        </p>
      </form>
    </div>
  );
}
