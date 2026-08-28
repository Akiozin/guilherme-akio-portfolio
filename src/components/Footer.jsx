import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const SOCIALS = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/Akiozin' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/guilherme-akio-ishihara-830a21267/' },
  { icon: Mail, label: 'E-mail', href: 'mailto:guilhermeakio28@gmail.com' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-xs text-ink-500 font-mono">
          © {new Date().getFullYear()} — construído com React, Tailwind &amp; Framer Motion.
        </p>

        <div className="flex items-center gap-3">
          {SOCIALS.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              whileHover={{ y: -3, scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="grid place-items-center w-10 h-10 rounded-full border border-white/10 text-ink-400 hover:text-accent-cyan hover:border-accent-cyan/50 transition-colors"
            >
              <social.icon size={17} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  )
}
