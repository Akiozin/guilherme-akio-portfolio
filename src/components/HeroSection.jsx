import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'

// Cada palavra é revelada individualmente com uma máscara que sobe (clip-path)
const TITLE_LINES = ['Engenharia de', 'software com', 'tecnologia, dados e propósito.']

const lineVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.3 },
  },
}

const wordVariants = {
  hidden: { y: '110%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Fundo: grade sutil + blobs de aurora animados (elemento de assinatura) */}
      <div className="absolute inset-0 bg-grid-fade pointer-events-none" />
      <div
        aria-hidden
        className="absolute -top-32 -left-24 w-[32rem] h-[32rem] rounded-full bg-accent-cyan/20 blur-[110px] animate-aurora-drift pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -right-24 w-[34rem] h-[34rem] rounded-full bg-accent-violet/20 blur-[120px] animate-aurora-drift pointer-events-none"
        style={{ animationDelay: '-6s' }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-eyebrow mb-6 inline-flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-blink" />
          Olá, eu sou o Guilherme
        </motion.p>

        <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl leading-[1.08] tracking-tight text-ink-50">
          {TITLE_LINES.map((line, i) => (
            <motion.span
              key={i}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="block overflow-hidden pb-2"
            >
              <motion.span
                variants={wordVariants}
                className={`inline-block ${
                  i === 2 ? 'text-aurora' : ''
                }`}
              >
                {line}
              </motion.span>
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-8 text-ink-400 text-base sm:text-lg max-w-xl mx-auto font-body"
        >
          Estudante de {' '} 
          <span className="font-mono text-ink-50">Engenharia de Software</span>{' '}
          na FIAP, com experiência profissional em suporte e desenvolvimento de 
          sistemas. Trabalho principalmente com Java, VRaptor e SQL, enquanto desenvolvo projetos acadêmicos 
          pessoais com tecnologias como {' '}
          <span className="font-mono text-ink-50">Spring Boot, Python, JavaScript e React.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#projetos"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent-cyan text-base-deep font-semibold shadow-glow-cyan"
          >
            Ver Projetos
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.a>
          <motion.a
            href="mailto:guilhermeakio28@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-7 py-3.5 rounded-full border border-white/15 text-ink-50 font-medium hover:border-accent-cyan/50 hover:text-accent-cyan transition-colors"
          >
            Falar comigo
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-ink-500"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
