const diferenciais = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="10" stroke="#c9a84c" strokeWidth="1" />
        <path d="M11 6v5l3.5 2" stroke="#c9a84c" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    title: 'Tecnologia de ponta',
    desc: 'Equipamentos de última geração para diagnósticos precisos e procedimentos mais seguros e eficientes.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 19S3 14 3 8a8 8 0 0116 0c0 6-8 11-8 11z" stroke="#c9a84c" strokeWidth="1" />
        <path d="M8 9l2 2 4-4" stroke="#c9a84c" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Atendimento humanizado',
    desc: 'Cada paciente é único. Atendimento personalizado e acolhedor do agendamento ao pós-tratamento.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="6" width="18" height="13" rx="1.5" stroke="#c9a84c" strokeWidth="1" />
        <path d="M7 6V5a4 4 0 018 0v1" stroke="#c9a84c" strokeWidth="1" />
        <circle cx="11" cy="13" r="2" stroke="#c9a84c" strokeWidth="1" />
      </svg>
    ),
    title: 'Ambiente premium',
    desc: 'Um espaço projetado para o seu conforto, com ambientação sofisticada e aconchegante.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="10" stroke="#c9a84c" strokeWidth="1" />
        <polyline points="6,11 9,14 16,7" stroke="#c9a84c" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Resultados garantidos',
    desc: 'Compromisso total com a qualidade e acompanhamento pós-tratamento para garantir sua satisfação.',
  },
]

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="bg-dark-2 py-28">
      <div className="max-w-6xl mx-auto px-10">
        <div className="text-center mb-16">
          <span className="section-tag">Por que nos escolher</span>
          <h2 className="section-title text-4xl md:text-5xl">
            Nossos <em>Diferenciais</em>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {diferenciais.map((d) => (
            <div key={d.title} className="text-center">
              <div className="w-14 h-14 border border-gold/25 rounded-full flex items-center justify-center mx-auto mb-5">
                {d.icon}
              </div>
              <h4 className="font-serif font-normal text-white text-lg mb-2">{d.title}</h4>
              <p className="text-[#888] text-sm leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a href="#contato" className="btn-primary">
            Agendar avaliação gratuita
          </a>
        </div>
      </div>
    </section>
  )
}
