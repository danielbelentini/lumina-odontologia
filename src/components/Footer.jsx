const links = ['Sobre', 'Tratamentos', 'Diferenciais', 'Depoimentos', 'Contato']

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-gold/10 py-10 px-10">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-6">
        <span className="font-serif font-light text-gold text-xl tracking-widest">
          Lumina Odontologia
        </span>

        <ul className="flex flex-wrap gap-6 list-none">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-[#666] text-xs tracking-[0.12em] uppercase hover:text-gold transition-colors duration-300"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <span className="text-[#444] text-xs">
          © {new Date().getFullYear()} Lumina Odontologia. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  )
}
