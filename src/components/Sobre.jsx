const stats = [
  { num: '12+', label: 'Anos de experiência' },
  { num: '2k+', label: 'Pacientes atendidos' },
  { num: '98%', label: 'Satisfação' },
  { num: '8', label: 'Especialidades' },
]

export default function Sobre() {
  return (
    <section id="sobre" className="bg-dark-2 py-28">
      <div className="max-w-6xl mx-auto px-10 grid md:grid-cols-2 gap-20 items-center">
        {/* Texto */}
        <div>
          <span className="section-tag">Sobre a clínica</span>
          <h2 className="section-title text-4xl md:text-5xl mb-6">
            Tradição e <em>inovação</em><br />em cada detalhe
          </h2>
          <p className="text-cream-dim text-sm leading-relaxed mb-4">
            A Lumina Odontologia nasceu com uma missão: oferecer tratamentos
            odontológicos de alto padrão com atendimento humanizado, onde cada
            paciente é tratado com atenção individual e cuidado genuíno.
          </p>
          <p className="text-cream-dim text-sm leading-relaxed mb-8">
            Nossa equipe combina anos de experiência clínica com as mais
            modernas tecnologias do mercado, garantindo resultados precisos e
            duradouros para cada sorriso que transformamos.
          </p>
          <a href="#contato" className="btn-primary">
            Agende sua avaliação gratuita
          </a>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-dark-3 border border-gold/10 p-7 text-center"
            >
              <div className="font-serif font-light text-gold text-5xl leading-none mb-2">
                {s.num}
              </div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#888]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
