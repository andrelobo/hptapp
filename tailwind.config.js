/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 20px 45px rgba(10, 49, 132, 0.12)',
        glow: '0 18px 40px rgba(22, 96, 255, 0.22)'
      },
      colors: {
        brand: {
          50: '#f5f8ff',
          100: '#e6eeff',
          300: '#7ba5ff',
          500: '#1d5eff',
          700: '#0a3184',
          900: '#071c4b'
        },
        gold: '#f2b544',
        ink: '#172033',
        mist: '#f7f9ff'
      },
      backgroundImage: {
        'brand-mesh':
          'radial-gradient(circle at top left, rgba(123, 165, 255, 0.22), transparent 24%), radial-gradient(circle at 85% 15%, rgba(242, 181, 68, 0.18), transparent 18%), radial-gradient(circle at bottom right, rgba(29, 94, 255, 0.34), transparent 26%), linear-gradient(160deg, #04142f 0%, #08245f 38%, #0a3184 70%, #0b3e9f 100%)'
      }
    }
  },
  plugins: []
}
