/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './assets/js/*.js'],
  theme: {
    extend: {
      colors: {
        primary: '#10C285',
        'neutral-50': '#F7F7FA',
        'neutral-100': '#EBEDF2',
        'neutral-200': '#E2E4EB',
        'neutral-300': '#D4D9DF',
        'neutral-500': '#788393',
        'neutral-600': '#575F6B',
        'neutral-700': '#373E49',
        'neutral-800': '#252931',
        'green-rgba': 'rgba(3, 88, 59, 0.5)',
        'black-rgba-03': 'rgba(0, 0, 0, 0.4)',
        success: '#00D595',
        'functional-red': '#ED1941',
        'functional-red-1': '#FF4669',
        'green-light': '#EAF6F2',
        'yellow-card': '#FFB625',
        red: '#F00',
        gray: '#B3BECB'
      },
      backgroundImage: {
        'match-detail': "url('./assets/images/match-detail-bg.png')"
      }
    },
    container: {
      center: true,
      padding: '16px'
    }
  },
  plugins: []
}
