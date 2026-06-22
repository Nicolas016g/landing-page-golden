const clients = [
  "NexaCorp", "QuantumTech", "VertexAI", "HyperScale",
  "DataForge", "CloudNova", "SynapseX", "OmniLogic",
  "NexaCorp", "QuantumTech", "VertexAI", "HyperScale",
];

export function TrustBar() {
  return (
    <section className="border-y border-border/60 bg-gradient-to-r from-surface via-white to-surface py-8">
      <div className="mb-2 text-center">
        <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-primary">
          +2.400 empresas já confiam
        </p>
        <p className="mt-1 text-sm text-text-muted">
          Junte-se às maiores corporações que multiplicaram seus resultados
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />
        <div className="flex animate-marquee whitespace-nowrap">
          {clients.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="mx-10 flex items-center gap-3 text-xl font-extrabold text-primary/25"
            >
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 shadow-sm" />
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
