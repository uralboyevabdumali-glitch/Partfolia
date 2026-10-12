/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A78BFA",
        secondary: "#22D3EE",
        accent: "#F472B6",
        ink: "#EEF0FF",
        bg: "#05060F",
        card: "#0E1020",
        section: "#080A16",
        line: "rgba(255,255,255,0.09)",
      },
      fontFamily: {
        display: ["'Clash Display'", "'General Sans'", "sans-serif"],
        body: ["'General Sans'", "'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 50px -8px rgba(167,139,250,0.55)",
        glowCyan: "0 0 50px -8px rgba(34,211,238,0.5)",
        glowSoft: "0 30px 80px -30px rgba(0,0,0,0.8)",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(60px, -50px) scale(1.12)" },
          "66%": { transform: "translate(-40px, 40px) scale(0.92)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        shine: {
          from: { backgroundPosition: "200% center" },
          to: { backgroundPosition: "-200% center" },
        },
        spinSlow: {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        blob: "blob 16s infinite ease-in-out",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        shine: "shine 6s linear infinite",
        spinSlow: "spinSlow 18s linear infinite",
      },
    },
  },
  plugins: [],
};
