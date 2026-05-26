/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030303",
        surface: "#09090b",
        "surface-light": "#18181b",
        primary: {
          DEFAULT: "#3b82f6",
          dark: "#1d4ed8",
          light: "#60a5fa",
        },
        accent: {
          purple: "#8b5cf6",
          emerald: "#10b981",
          rose: "#f43f5e",
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Outfit", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "border-beam": "borderBeam 6s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "spotlight": "spotlight 2s ease forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        borderBeam: {
          "100%": { "offset-distance": "100%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        spotlight: {
          "0%": { opacity: "0", transform: "translate(-50%, -50%) scale(0.8)" },
          "100%": { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        }
      },
      backgroundImage: {
        "radial-glow": "radial-gradient(circle at center, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "glass-sm": "0 2px 8px 0 rgba(0, 0, 0, 0.3)",
        "glass-md": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "glow-blue": "0 0 20px rgba(59, 130, 246, 0.15)",
        "glow-purple": "0 0 20px rgba(139, 92, 246, 0.15)",
      }
    },
  },
  plugins: [],
}
