const tratamentos = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="15" stroke="#c9a84c" strokeWidth="1" />
        <path d="M10 16a6 6 0 1112 0 6 6 0 01-12 0z" stroke="#c9a84c" strokeWidth="1.2" />
        <path d="M16 10v2M16 20v2M10 16h2M20 16h2" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Implantes Dentários',
    desc: 'Implantes de última geração que restituem função e estética com naturalidade e durabilidade incomparáveis.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="15" stroke="#c9a84c" strokeWidth="1" />
        <rect x="10" y="12" width="12" height="9" rx="1.5" stroke="#c9a84c" strokeWidth="1.2" />
        <path d="M13 12V10a3 3 0 016 0v2" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Facetas Dentárias',
    desc: 'Lâminas de porcelana ultrafinas que transformam o sorriso com resultado natural e acabamento refinado.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="15" stroke="#c9a84c" strokeWidth="1" />
        <path d="M10 20l2-6 3 5 2-3 2 4" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Clareamento Dental',
    desc: 'Técnicas seguras e eficazes para devolver o brilho e a brancura natural ao seu sorriso em poucas sessões.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="15" stroke="#c9a84c" strokeWidth="1" />
        <path d="M11 22c0-5.5 10-5.5 10 0" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="16" cy="13" r="3" stroke="#c9a84c" strokeWidth="1.2" />
      </svg>
    ),
    title: 'Ortodontia',
    desc: 'Aparelhos convencionais e alinhadores invisíveis para um sorriso alinhado com o máximo de discrição.',
  },
]

export default function Tratamentos() {
  return (
    <section id="tratamentos" className="bg-dark py-28">
      <div className="max-w-6xl mx-auto px-10">
        <div className="text-center mb-16">
          <span className="section-tag">O que oferecemos</span>
          <h2 className="section-title text-4xl md:text-5xl">
            Nossos <em>Tratamentos</em>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tratamentos.map((t) => (
            <div
              key={t.title}
              className="bg-dark-3 border border-gold/10 p-8 group hover:border-gold/35 hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="mb-5 opacity-75 group-hover:opacity-100 transition-opacity">
                {t.icon}
              </div>
              <h3 className="font-serif font-normal text-white text-xl mb-3">{t.title}</h3>
              <p className="text-[#888] text-sm leading-relaxed mb-5">{t.desc}</p>
              <a
                href="#contato"
                className="text-gold text-xs tracking-[0.18em] uppercase border-b border-gold/30 pb-0.5 hover:border-gold transition-colors"
              >
                Saiba mais →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contato" className="btn-primary">
            Quero agendar minha consulta
          </a>
        </div>
      </div>
    </section>
  )
}
