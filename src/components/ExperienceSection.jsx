import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Code2 } from 'lucide-react'

const MILESTONES = [
  {
    icon: GraduationCap,
    title: 'Engenharia de Software',
    org: 'FIAP',
    period: '2023 — 2026',
    tags: [],
  },
  {
    icon: Briefcase,
    title: 'ITM Channel Marketing',
    org: 'Suporte e Desenvolvimento',
    period: '2025 - Atual',
    tags: ['Java', 'VRaptor', 'SQL'],
  },
  {
    icon: Code2,
    title: 'Desenvolvimento',
    org: null,
    period: null,
    tags: ['Java', 'Spring Boot', 'SQL', 'Python', 'React'],
  },
]

const nodeVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="relative py-28 md:py-36 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-eyebrow">Trajetória</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-4 text-ink-50">
            Minha <span className="text-aurora">trajetória</span>.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Linha vertical conectando os marcos */}
          <div
            aria-hidden
            className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-cyan/60 via-white/10 to-transparent"
          />

          <div className="space-y-8">
            {MILESTONES.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={nodeVariants}
                className="relative flex gap-6"
              >
                {/* Nó / ícone */}
                <div className="relative z-10 shrink-0 grid place-items-center w-10 h-10 rounded-full bg-base-900 border border-accent-cyan/40 shadow-glow-cyan">
                  <item.icon size={17} className="text-accent-cyan" />
                </div>

                {/* Card de conteúdo */}
                <div className="glass-panel rounded-2xl p-6 flex-1 shadow-glass">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-display font-semibold text-lg text-ink-50">
                      {item.title}
                      {item.org && (
                        <span className="text-ink-400 font-normal"> — {item.org}</span>
                      )}
                    </h3>
                    {item.period && (
                      <span className="font-mono text-xs text-accent-cyan/90 whitespace-nowrap">
                        {item.period}
                      </span>
                    )}
                  </div>

                  {item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.tags.map((tag) => (
                        <span key={tag} className="tech-badge">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
