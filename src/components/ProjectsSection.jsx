import { motion } from 'framer-motion'
import { Github, ExternalLink, Sparkles } from 'lucide-react'
import { projects } from '../data/projects'

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

function ProjectCard({ project }) {
  const isCaseStudy = project.type === 'case-study'

  return (
    <motion.article
      variants={cardVariants}
      className="group relative rounded-2xl overflow-hidden glass-panel shadow-glass transition-shadow duration-500 hover:shadow-glow-cyan"
    >
      {/* Borda que brilha com a cor de destaque no hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent group-hover:border-accent-cyan/40 transition-colors duration-500 z-20" />

      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base-900 via-base-900/20 to-transparent" />

        {/* Ações que aparecem no hover */}
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-end gap-2 p-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`Repositório de ${project.title} no GitHub`}
              className="grid place-items-center w-9 h-9 rounded-full bg-base-deep/80 border border-white/15 text-ink-50 hover:border-accent-cyan hover:text-accent-cyan transition-colors"
            >
              <Github size={16} />
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              aria-label={`Ver deploy de ${project.title}`}
              className="grid place-items-center w-9 h-9 rounded-full bg-base-deep/80 border border-white/15 text-ink-50 hover:border-accent-cyan hover:text-accent-cyan transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Conteúdo textual */}
      <div className="p-6">
        <h3 className="font-display font-semibold text-lg text-ink-50 mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-ink-400 leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] text-ink-400 border border-white/[0.06]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projetos" className="relative py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="section-eyebrow">Trabalhos selecionados</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-4 text-ink-50">
            Projetos que unem engenharia e{' '}
            <span className="text-aurora">design de interação</span>.
          </h2>
        </motion.div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
