/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          deep: '#080D17',   // fundo mais profundo que slate-900, usado no body
          900: '#0F172A',    // slate-900 — superfícies/painéis
          800: '#141E33',
          700: '#1B2740',
        },
        ink: {
          50: '#F8FAFC',     // off-white principal
          400: '#94A3B8',
          500: '#64748B',
        },
        accent: {
          cyan: '#22D3EE',
          violet: '#A78BFA',
          DEFAULT: '#22D3EE',
        },
      },
      fontFamily: {
        display: ['"Poppins"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'aurora-gradient': 'linear-gradient(135deg, #22D3EE 0%, #A78BFA 100%)',
        'grid-fade': 'radial-gradient(ellipse at top, rgba(34,211,238,0.08), transparent 60%)',
      },
      boxShadow: {
        'glow-cyan': '0 0 40px -10px rgba(34,211,238,0.45)',
        'glow-violet': '0 0 40px -10px rgba(167,139,250,0.45)',
        glass: '0 8px 32px 0 rgba(0,0,0,0.36)',
      },
      animation: {
        'aurora-drift': 'aurora-drift 18s ease-in-out infinite',
        blink: 'blink 1.1s steps(1) infinite',
      },
      keyframes: {
        'aurora-drift': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(4%, -6%) scale(1.08)' },
          '66%': { transform: 'translate(-3%, 4%) scale(0.96)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
