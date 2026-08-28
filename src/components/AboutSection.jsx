import { motion } from 'framer-motion'
import { Coffee, Database, Layers, Server, Code2, Leaf } from 'lucide-react'

const STACK = [
  { label: 'Java', icon: Coffee },
  { label: 'Spring Boot', icon: Leaf },
  { label: 'SQL', icon: Database },
  { label: 'Python', icon: Code2 },
  { label: 'JavaScript', icon: Code2 },
  { label: 'React', icon: Code2 },
  { label: 'REST APIs', icon: Server },
  { label: 'Git', icon: Code2 },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function AboutSection() {
  return (
    <section id="sobre" className="relative py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Coluna 1 — Jornada */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <span className="section-eyebrow">Sobre mim</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-4 mb-6 text-ink-50">
            Da lógica do back-end à{' '}
            <span className="text-aurora">experiência do usuário</span>.
          </h2>
          <div className="space-y-4 text-ink-400 leading-relaxed font-body">
            <p>
              Sou estudante de Engenharia de Software na FIAP e atuo profissionalmente com{' '}
              <span className="font-mono text-ink-50">Suporte e Desenvolvimento</span>{' '}
              em uma empresa de soluções para ponto de venda (PDV).
            </p>
            <p>
             No dia a dia, trabalho principalmente com{' '}
             <span className="font-mono text-ink-50">Java, VRaptor e SQL</span>,
             atuando na manutenção, evolução e 
             desenvolvimento de sistemas, além do suporte às demandas relacionadas às aplicações.
            </p>
            <p>
              Paralelamente à experiência profissional, continuo aprimorando meus conhecimentos em {' '}
              <span className="font-mono text-ink-50">desenvolvimento de software</span>{' '}
               e explorando tecnologias como Spring Boot, Python, JavaScript e React por meio de projetos 
              acadêmicos e pessoais.
            </p>
          </div>
        </motion.div>

        {/* Coluna 2 — Stack tecnológica */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          custom={1}
          className="glass-panel rounded-3xl p-8 shadow-glass"
        >
          <h3 className="font-mono text-sm text-ink-400 mb-6 tracking-wide">
            // stack em uso
          </h3>
          <div className="flex flex-wrap gap-3">
            {STACK.map((tech, i) => (
              <motion.span
                key={tech.label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="tech-badge inline-flex items-center gap-2"
              >
                <tech.icon size={13} className="text-accent-cyan/80" />
                {tech.label}
              </motion.span>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
            {[
              { value: '8+', label: 'Tecnologias principais' },
              { value: '2023-2026', label: 'Engenharia de Software' },
              { value: '10+', label: 'projetos acadêmicos e pessoais' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display font-bold text-2xl text-ink-50">
                  {stat.value}
                </p>
                <p className="text-xs text-ink-500 mt-1 font-mono">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
