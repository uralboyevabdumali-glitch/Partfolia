/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#BFBB5A",
        secondary: "#96BB73",
        ink: "#E7E5DF",
        bg: "#0B0B0B",
        card: "#171717",
        section: "#121212",
        line: "rgba(231,229,223,0.08)",
      },
      fontFamily: {
        display: ["'Clash Display'", "'General Sans'", "sans-serif"],
        body: ["'General Sans'", "'Inter'", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(191,187,90,0.35)",
        glowSoft: "0 20px 60px -20px rgba(0,0,0,0.6)",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.08)" },
          "66%": { transform: "translate(-20px, 25px) scale(0.95)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        blob: "blob 12s infinite ease-in-out",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
