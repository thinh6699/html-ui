/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ['./*.html', './assets/js/*.js'],
  theme: {
    extend: {
      colors: {
        primary: '#10C285',
        'neutral-50': '#F7F7FA',
        'neutral-100': '#EBEDF2',
        'neutral-200': '#E2E4EB',
        'neutral-300': '#D4D9DF',
        'neutral-400': '#ABB3BF',
        'neutral-500': '#788393',
        'neutral-600': '#575F6B',
        'neutral-700': '#373E49',
        'neutral-800': '#252931',
        'green-rgba': 'rgba(3, 88, 59, 0.5)',
        'black-rgba-03': 'rgba(0, 0, 0, 0.4)',
        success: '#00D595',
        'functional-red': '#ED1941',
        'functional-red-1': '#FF4669',
        'functional-yellow': '#FFB625',
        'functional-yellow-rbga-01': 'rgba(255, 182, 37, 0.1)',
        'green-light': '#EAF6F2',
        'yellow-card': '#FFB625',
        red: '#F00',
        gray: '#B3BECB',
        'gray-1': '#F0F0F0',
        'dark-grey': '#1C2029',
        'light-green': '#E8FFFB',
        'section-bg': '#fff',
        dark: {
          primary: '#10C285',
          'neutral-50': '#12141A',
          'neutral-100': '#252931',
          'neutral-200': '#373E49',
          'neutral-300': '#D4D9DF',
          'neutral-400': '#788393',
          'neutral-500': '#ABB3BF',
          'neutral-600': '#D4D9DF',
          'neutral-700': '#E2E4EB',
          'neutral-800': '#EBEDF2',
          'green-rgba': 'rgba(3, 88, 59, 0.5)',
          'black-rgba-03': 'rgba(0, 0, 0, 0.4)',
          success: '#00D595',
          'functional-red': '#ED1941',
          'functional-red-1': '#FF4669',
          'functional-yellow': '#FFB625',
          'functional-yellow-rbga-01': 'rgba(255, 182, 37, 0.1)',
          'green-light': '#222A2D',
          'yellow-card': '#FFB625',
          red: '#F00',
          gray: '#B3BECB',
          'gray-1': '#F0F0F0',
          'dark-grey': '#1C2029',
          'light-green': '#E8FFFB',
          'section-bg': '#1E2128'
        }
      },
      backgroundImage: {
        'match-detail': "url('./assets/images/match-detail-bg.png')",
        'right-login': "url('./assets/images/login-right-bg.png')",
        'left-login': "url('./assets/images/login-left-bg.png')"
      }
    },
    container: {
      center: true,
      padding: '16px'
    }
  },
  plugins: []
}
