/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Plus Jakarta Sans", "sans-serif"],
      body: ["Inter", "sans-serif"],
    },
    extend: {
      fontSize: {
        14: "14px",
      },
      colors: {
        primary: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1", // Primary indigo
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
        success: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981", // Success green
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
        },
        warning: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b", // Warning amber
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
        danger: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444", // Danger red
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
        },
        info: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
        },
        "main-bg": "#e5f0f9", // Light gray background"#daeafe"
        "main-dark-bg": "#111827", // Dark background
        "secondary-dark-bg": "#1f2937", // Secondary dark background
        "light-gray": "#f3f4f6",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
      backgroundColor: {
        "main-bg": "#e5f0f9", // Light gray background
        "main-dark-bg": "#111827", // Dark background
        "secondary-dark-bg": "#1f2937", // Secondary dark background
        "light-gray": "#f3f4f6",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
      height: {
        80: "80px",
      },
      minHeight: {
        590: "590px",
      },
      backgroundImage: {
        "hero-pattern": "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
        "welcome-bg": "url('/welcome-bg.svg')",
        "gradient-primary": "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
        "gradient-success": "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
        "gradient-warning": "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
        "gradient-danger": "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
        "gradient-cool": "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
        "gradient-sunset": "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
        "gradient-ocean": "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
      },
      boxShadow: {
        "card-hover":
          "0 12px 20px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        colored: "0 10px 20px -5px rgba(99, 102, 241, 0.25)",
        success: "0 10px 20px -5px rgba(16, 185, 129, 0.25)",
        warning: "0 10px 20px -5px rgba(245, 158, 11, 0.25)",
        danger: "0 10px 20px -5px rgba(239, 68, 68, 0.25)",
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(99, 102, 241, 0.3)" },
          "100%": { boxShadow: "0 0 20px rgba(99, 102, 241, 0.6)" },
        },
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
