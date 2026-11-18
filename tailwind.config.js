/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F5F3EF',
        bone: '#ECE8E1',
        stone: '#D9D4CB',
        ink: '#202222',
        graphite: '#3A3D3D',
        mute: '#76787A',
        burgundy: { DEFAULT: '#672B36', deep: '#4E1F28', soft: '#8A4A55' },
        steel: '#A7A9A8',
      },
      fontFamily: {
        sans: ['"Manrope Variable"', 'Manrope', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      fontSize: {
        'display': ['clamp(3.4rem, 10.5vw, 11rem)', { lineHeight: '0.86', letterSpacing: '-0.05em' }],
        'h1': ['clamp(2.5rem, 6.2vw, 6rem)', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        'h2': ['clamp(2rem, 4.4vw, 4.25rem)', { lineHeight: '1', letterSpacing: '-0.035em' }],
        'h3': ['clamp(1.375rem, 2.2vw, 2rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'stat': ['clamp(3.5rem, 10vw, 10rem)', { lineHeight: '0.85', letterSpacing: '-0.05em' }],
      },
      maxWidth: { frame: '1440px', prose: '38rem' },
      opacity: { 12: '0.12', 92: '0.92' },
      transitionTimingFunction: { expo: 'cubic-bezier(0.16, 1, 0.3, 1)' },
    },
  },
  plugins: [],
};
