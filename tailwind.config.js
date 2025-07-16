/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Incluye todos los tipos de archivos que usas
  ],
  theme: {
    extend: {
      container: {
        center: true, // Centra el contenedor
        padding: '1rem', // Padding a los lados
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // Fuente personalizada
      },
    }, // ← Este cierre faltaba
  },
  plugins: [],
};


