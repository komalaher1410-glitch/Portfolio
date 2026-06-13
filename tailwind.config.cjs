module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glass: '0 20px 60px rgba(15, 23, 42, 0.25)',
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at top, rgba(96, 165, 250, 0.18), transparent 35%), radial-gradient(circle at right, rgba(251, 191, 36, 0.15), transparent 25%)',
        accent: 'linear-gradient(135deg, #7c3aed 0%, #0ea5e9 100%)'
      },
      colors: {
        surface: 'rgba(15, 23, 42, 0.8)',
        surface2: 'rgba(15, 23, 42, 0.65)',
        glow: '#7c3aed'
      }
    }
  },
  plugins: []
};
