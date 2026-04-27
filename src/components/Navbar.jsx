import { useState, useEffect } from 'react'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#tratamentos', label: 'Tratamentos' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center md:justify-between px-6 md:px-10 transition-all duration-500 ${
        scrolled
          ? 'bg-dark/95 backdrop-blur-md py-3 md:py-4'
          : 'bg-dark/95 md:bg-transparent py-4 md:py-5'
      }`}
      style={{
        borderBottom: scrolled
          ? '1px solid rgba(201,168,76,0.12)'
          : '1px solid transparent',
      }}
    >
      <span className="font-serif font-light text-gold text-base md:text-xl tracking-widest">
        Lumina<br className="hidden xs:block md:hidden" /> Odontologia
      </span>

      <ul className="hidden md:flex gap-8 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-cream-dim text-xs tracking-[0.15em] uppercase hover:text-gold transition-colors duration-300"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <a href="#contato" className="hidden md:inline-block btn-primary !py-3 !px-6 text-[11px]">
        Agendar Consulta
      </a>
    </nav>
  )
}
