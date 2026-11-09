/** @type {import('tailwindcss').Config} */
// Quelle: tokens.json / Brandbook v1.0. Neue Werte zuerst dort als Token anlegen.
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Figtree Variable', 'system-ui', 'sans-serif'],
        body: ['Barlow', 'system-ui', 'sans-serif'],
        sans: ['Barlow', 'system-ui', 'sans-serif'],
      },
      // Typografie-Skala (Brandbook Kap. 5). Keine Zwischengrössen.
      fontSize: {
        display: ['48px', { lineHeight: '1.1' }],
        h1: ['36px', { lineHeight: '1.15' }],
        h2: ['28px', { lineHeight: '1.2' }],
        h3: ['22px', { lineHeight: '1.3' }],
        'body-lg': ['18px', { lineHeight: '1.6' }],
        body: ['16px', { lineHeight: '1.6' }],
        label: ['1rem', { lineHeight: '1.5' }],
        caption: ['0.875rem', { lineHeight: '1.4' }],
      },
      colors: {
        // Linien: Schwarz 12 % (Kartenrahmen, Trenner). Eingabefelder: Schwarz 60 %.
        border: 'rgba(0,0,0,0.12)',
        input: 'rgba(0,0,0,0.6)',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          light: 'hsl(var(--primary-light))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',          // Grau: nur für Inaktives
          foreground: 'rgba(0,0,0,0.6)',          // Sekundärtext = Schwarz 60 %
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',         // nur Fläche und Icon, nie Schrift
          foreground: 'hsl(var(--success-foreground))',
          bg: 'hsl(var(--success-bg))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',     // nur Fläche und Icon, nicht als Text auf Sand
          foreground: 'hsl(var(--destructive-foreground))',
          bg: 'hsl(var(--destructive-bg))',
        },
        // Datenfarben (Rahmen = eigene Farbe auf HSL-Helligkeit 30 %)
        data: {
          protein: '#A0D4F2',
          'protein-rand': '#105D89',
          fett: '#FFDE59',
          'fett-rand': '#997B00',
          kohlenhydrate: '#57D989',
          'kohlenhydrate-rand': '#1A7F41',
          single: '#3F72C3',
          'single-rand': '#244375',
        },
      },
      borderRadius: {
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-lg)',
        full: 'var(--radius-full)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
