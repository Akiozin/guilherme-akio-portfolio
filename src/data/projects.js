// Estrutura de dados dos projetos.
// `type` diferencia projetos de engenharia (fullstack/back-end) de estudos de caso visuais.
export const projects = [
  {
    id: 'agendaflow',
    type: 'case-study', // projeto visual / interativo
    title: 'AgendaFlow — Plataforma SaaS de Agendamentos Multi-tenant',
    description:
      'Plataforma SaaS de agendamentos multi-tenant, com isolamento de dados entre empresas e arquitetura REST.',
    image:
      '/projects/agendaflow.jpg',
    stack: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Docker','Multi-tenant'],
    links: { github: 'https://github.com/Akiozin/AgendaFlow', demo: 'https://agenda-flow-tau.vercel.app' },
    featured: true,
  },
]
