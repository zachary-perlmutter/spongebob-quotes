import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "spongebob-yellow": "#FFD90F",
        "ocean-blue": "#1CA3EC",
        "patrick-pink": "#FF8ACB",
        "gary-purple": "#7A4FFF",
        "pineapple-orange": "#F6A01A",
        "sea-green": "#2EC4A6",
        "sand-beige": "#F5E6B8",
        "jellyfish-purple": "#B18CFF",
        "deep-navy": "#102A43",
        "dark-brown": "#3A2F28",
      },
      fontFamily: {
        cartoon: [
          "Comic Sans MS",
          "Arial Rounded MT Bold",
          "Helvetica Rounded",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-click": "bounce-click 0.5s ease",
        wiggle: "wiggle 0.5s ease",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "bounce-click": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.95)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-3deg)" },
          "75%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
