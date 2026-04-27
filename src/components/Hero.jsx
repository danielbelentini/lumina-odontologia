export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center px-6"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&q=80&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-dark/80" />

      {/* Brilho dourado sutil */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 50% 38%, rgba(201,168,76,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto animate-fade-up">
        <p className="section-tag opacity-90 mb-6">Odontologia de excelência</p>

        <h1 className="font-serif font-light text-white leading-[1.08] mb-4"
          style={{ fontSize: 'clamp(3.2rem, 7vw, 6rem)' }}
        >
          O sorriso que você<br />
          sempre <em className="text-gold not-italic">imaginou</em>
        </h1>

        <p className="font-serif font-light italic text-cream-dim mb-6"
          style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}
        >
          Cuidado premium com resultados que transformam
        </p>

        <p className="text-sm text-[#888] max-w-md mx-auto mb-10 leading-relaxed">
          Tratamentos modernos com tecnologia de ponta, num ambiente pensado
          para o seu conforto e bem-estar.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2"
          >
            <WhatsAppIcon />
            Agendar pelo WhatsApp
          </a>
          <a href="#tratamentos" className="btn-outline">
            Conhecer Tratamentos
          </a>
        </div>

        {/* linha decorativa */}
        <div className="w-px h-14 bg-gradient-to-b from-transparent via-gold to-transparent mx-auto mt-16 opacity-60" />
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
