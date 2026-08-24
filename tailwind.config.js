/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Enforce ProPeak Brand Colors
        brand: {
          950: "#0A4F3A",
          800: "#0D7A58",
          600: "#10A87A",
          400: "#15D69C",
          200: "#7FFFD4",
        },
        bg: {
          page: "#F0FDF8",
          card: "#FFFFFF",
          badge: "#F7FEE7",
        },
        border: {
          theme: "#D1FAE5",
        },
        text: {
          primary: "#052E20",
          secondary: "#527A68",
          darkMuted: "rgba(255, 255, 255, 0.65)",
          darkEmphasis: "rgba(255, 255, 255, 0.9)",
          darkHeading: "#FFFFFF",
          highlight: "#7FFFD4",
        },
        accent: {
          teal: "#0D9488",
          lime: "#84CC16",
        }
      },
      fontFamily: {
        sans: [
          "Outfit",
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif"
        ],
        bellagia: ["Bellagia", "Playfair Display", "Georgia", "serif"],
        azonix: ["Azonix", "system-ui", "sans-serif"],
        gebril: ["Gebril", "Garamond", "Georgia", "serif"],
      },
      spacing: {
        '4.5': '1.125rem',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 40s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
