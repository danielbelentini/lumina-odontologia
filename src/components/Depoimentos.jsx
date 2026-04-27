const depoimentos = [
  {
    initials: 'AM',
    name: 'Ana Meireles',
    role: 'Paciente há 3 anos',
    text: 'Fiz meu implante aqui e o resultado foi simplesmente incrível. O atendimento foi cuidadoso do começo ao fim e meu sorriso nunca esteve tão bonito.',
  },
  {
    initials: 'CR',
    name: 'Carla Ribeiro',
    role: 'Paciente há 1 ano',
    text: 'Sempre tive medo de dentista, mas aqui me senti acolhida desde o primeiro dia. As facetas ficaram perfeitas, exatamente como eu sonhava.',
  },
  {
    initials: 'RS',
    name: 'Rafael Souza',
    role: 'Paciente há 2 anos',
    text: 'Profissionalismo impecável. Fiz o clareamento e os resultados superaram minhas expectativas. Indico para todos os meus amigos sem hesitar.',
  },
]

function Stars() {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-gold text-sm">★</span>
      ))}
    </div>
  )
}

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="bg-dark py-28">
      <div className="max-w-6xl mx-auto px-10">
        <div className="text-center mb-16">
          <span className="section-tag">O que dizem nossos pacientes</span>
          <h2 className="section-title text-4xl md:text-5xl">
            Histórias de <em>transformação</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {depoimentos.map((d) => (
            <div
              key={d.name}
              className="bg-dark-3 border border-gold/10 p-8 hover:border-gold/25 transition-colors duration-300"
            >
              <Stars />
              <p className="font-serif italic text-cream-dim text-base leading-relaxed mb-6">
                <span className="text-4xl text-gold/40 leading-none align-[-0.5rem] mr-1">"</span>
                {d.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-dark-4 border border-gold/20 flex items-center justify-center text-gold text-xs font-medium flex-shrink-0">
                  {d.initials}
                </div>
                <div>
                  <div className="text-white text-sm font-medium">{d.name}</div>
                  <div className="text-[#888] text-xs">{d.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contato" className="btn-primary">
            Quero transformar meu sorriso
          </a>
        </div>
      </div>
    </section>
  )
}
