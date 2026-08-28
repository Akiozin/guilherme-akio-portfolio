import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Terminal, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'experiencia', label: 'Experiência' },
]

export default function Navbar() {
  const [active, setActive] = useState('inicio')
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Detecta scroll para intensificar o efeito de vidro
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Observa qual seção está visível para destacar o link ativo
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <nav
          className={`glass-panel rounded-2xl px-5 py-3 flex items-center justify-between shadow-glass transition-shadow duration-500 ${
            scrolled ? 'shadow-glow-cyan' : ''
          }`}
        >
          {/* Logo */}
          <button
            onClick={() => scrollTo('inicio')}
            className="flex items-center gap-2 font-display font-semibold tracking-tight"
          >
            <span className="grid place-items-center w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 border border-white/10">
              <Terminal size={16} className="text-accent-cyan" />
            </span>
            <span className="text-ink-50">
              dev<span className="text-aurora">.folio</span>
            </span>
          </button>

          {/* Links — desktop */}
          <ul className="hidden md:flex items-center gap-1 font-mono text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.id} className="relative">
                <button
                  onClick={() => scrollTo(link.id)}
                  className={`relative z-10 px-4 py-2 rounded-full transition-colors duration-300 ${
                    active === link.id
                      ? 'text-base-deep'
                      : 'text-ink-400 hover:text-ink-50'
                  }`}
                >
                  {link.label}
                </button>
                {active === link.id && (
                  <motion.div
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-accent-cyan"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            ))}
          </ul>

          {/* Botão menu mobile */}
          <button
            className="md:hidden text-ink-50"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Menu mobile */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass-panel mt-2 rounded-2xl p-3 flex flex-col gap-1 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`font-mono text-sm text-left px-4 py-3 rounded-xl transition-colors ${
                  active === link.id
                    ? 'bg-accent-cyan text-base-deep'
                    : 'text-ink-400 hover:text-ink-50 hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </header>
  )
}
