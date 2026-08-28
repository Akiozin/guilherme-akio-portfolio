# 💻 Portfólio — Guilherme Akio Ishihara

Portfólio pessoal desenvolvido para apresentar minha trajetória acadêmica, experiência profissional, principais tecnologias e projetos desenvolvidos ao longo da minha formação em Engenharia de Software.

O projeto foi construído como uma **Single Page Application (SPA)** utilizando React, com foco em uma interface moderna, responsiva, acessível e com animações sutis para melhorar a experiência de navegação.

## ✨ Sobre o projeto

O portfólio foi desenvolvido para funcionar como uma apresentação profissional e técnica, reunindo:

- 👨‍💻 Apresentação profissional
- 🛠️ Principais tecnologias e competências
- 📂 Projetos acadêmicos e pessoais
- 💼 Experiência profissional
- 🎓 Formação acadêmica
- 🔗 Links para GitHub e LinkedIn
- 📱 Interface responsiva para diferentes dispositivos

A interface utiliza um design dark com elementos de **glassmorphism**, gradientes e animações para criar uma identidade visual alinhada ao universo de desenvolvimento de software.

## 🚀 Tecnologias utilizadas

### Front-end

- **React 18** — Construção da interface e componentização
- **Vite** — Ferramenta de build e desenvolvimento
- **Tailwind CSS** — Estilização e design system
- **Framer Motion** — Animações e transições
- **Lucide React** — Biblioteca de ícones

### Conceitos aplicados

- Componentização com React
- Single Page Application (SPA)
- Design responsivo
- Navegação por seções
- Animações baseadas em viewport
- Estados e eventos com React Hooks
- Intersection Observer API
- Organização de dados independente dos componentes
- Acessibilidade e navegação por teclado
- `prefers-reduced-motion`
- Lazy loading de imagens
- Design system baseado em tokens

## 📁 Estrutura do projeto

```text
portfolio/
├── public/
│   ├── favicon.svg
│   └── projects/
│       └── agendaflow.jpg
│
├── src/
│   ├── components/
│   │   ├── AboutSection.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Navbar.jsx
│   │   └── ProjectsSection.jsx
│   │
│   ├── data/
│   │   └── projects.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Interface

O projeto utiliza uma identidade visual baseada em tons escuros, cyan e violeta.

### Principais elementos

- Navegação fixa com efeito de glassmorphism
- Indicador animado da seção atual
- Hero section com animações de entrada
- Gradiente "Aurora" como elemento visual de destaque
- Cards de projetos com efeitos de hover
- Timeline para formação e experiência
- Layout adaptado para dispositivos móveis
- Estados visuais para interação com elementos clicáveis

## 📂 Projetos

### AgendaFlow

**Plataforma SaaS de Agendamentos Multi-tenant**

Projeto full-stack desenvolvido para demonstrar conceitos de arquitetura de software, desenvolvimento de APIs REST e isolamento de dados entre diferentes empresas.

**Tecnologias:**

`Java` `Spring Boot` `React` `PostgreSQL` `Docker` `Multi-tenant`

🔗 **Código-fonte:**  
https://github.com/Akiozin/AgendaFlow

🔗 **Demo:**  
https://agenda-flow-tau.vercel.app

## ♿ Acessibilidade

O projeto possui algumas práticas voltadas à acessibilidade, incluindo:

- Indicadores visuais de foco com `:focus-visible`
- Navegação utilizando teclado
- `aria-label` em elementos interativos quando necessário
- Respeito à preferência do usuário por redução de movimento através de `prefers-reduced-motion`
- Estrutura semântica utilizando elementos como `header`, `main`, `section`, `article` e `footer`

## 🧩 Arquitetura

A aplicação utiliza uma estrutura baseada em componentes, mantendo cada seção do portfólio isolada e reutilizável.

Os dados dos projetos ficam separados da camada de apresentação em:

```text
src/data/projects.js
```

Isso permite adicionar ou modificar projetos sem precisar alterar diretamente a estrutura visual do componente responsável pela renderização dos cards.

## ⚙️ Como executar localmente

### Pré-requisitos

- Node.js
- npm

### 1. Clone o repositório

```bash
git clone https://github.com/Akiozin/portfolio.git
cd portfolio
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute em ambiente de desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em:

```text
http://localhost:5173
```

### 4. Gerar build de produção

```bash
npm run build
```

### 5. Visualizar o build

```bash
npm run preview
```

## 📝 Personalização

### Projetos

Os projetos apresentados no portfólio podem ser alterados em:

```text
src/data/projects.js
```

Cada projeto pode possuir:

```javascript
{
  id: 'projeto',
  type: 'case-study',
  title: 'Nome do projeto',
  description: 'Descrição do projeto',
  image: '/projects/imagem.jpg',
  stack: ['Java', 'Spring Boot', 'React'],
  links: {
    github: 'URL_DO_GITHUB',
    demo: 'URL_DA_DEMO'
  }
}
```

### Trajetória

As informações de formação, experiência e tecnologias utilizadas na trajetória profissional estão em:

```text
src/components/ExperienceSection.jsx
```

### Redes sociais

Os links de GitHub, LinkedIn e e-mail estão configurados em:

```text
src/components/Footer.jsx
```

### Identidade visual

Cores, fontes, sombras, animações e demais tokens visuais estão centralizados em:

```text
tailwind.config.js
```

## 📌 Objetivo

Este projeto representa não apenas um portfólio visual, mas também uma demonstração prática da minha evolução no desenvolvimento de software, combinando conhecimentos de **front-end, back-end, bancos de dados e arquitetura de aplicações**.

Atualmente, meu foco está no aprimoramento contínuo em desenvolvimento de software, especialmente no ecossistema **Java/Spring**, desenvolvimento web e integração entre aplicações e bancos de dados.

---

## 👨‍💻 Desenvolvido por

**Guilherme Akio Ishihara**

🎓 Engenharia de Software — FIAP  
💻 Java • Spring Boot • SQL • React • JavaScript • Python

[GitHub](https://github.com/Akiozin) • [LinkedIn](https://www.linkedin.com/in/guilherme-akio-ishihara-830a21267/)
