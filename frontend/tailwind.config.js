/**** Tailwind Config ****/ 
/** Vite + React preset is already set up **/
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#6C5CE7",
          600: "#5B4FE1",
          700: "#4B3ED1"
        },
        neon: {
          blue: "#00E5FF",
          purple: "#B388FF"
        }
      },
      backgroundImage: {
        'grid': "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
      }
    }
  },
  plugins: []
}
