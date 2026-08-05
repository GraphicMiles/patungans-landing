/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4ADE80', // bright green
        primaryDark: '#22C55E', // deep green
        secondary: '#1F2937', // dark gray / black sections
        ink: '#111827', // text / footer
        mist: '#F6F5FA', // light lavender-gray page background
      },
      boxShadow: {
        soft: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
