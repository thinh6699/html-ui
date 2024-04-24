/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#10C285',
        'neutral-50': '#F7F7FA',
        'neutral-100': '#EBEDF2',
        'neutral-200': '#E2E4EB',
        'neutral-600': '#575F6B',
        'neutral-700': '#373E49',
        'neutral-800': '#252931',
        gray: '#B3BECB'
      }
    },
    container: {
      center: true,
      padding: '16px'
    }
  },
  plugins: []
}
