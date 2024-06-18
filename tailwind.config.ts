import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "kanzoto-noise": "url('/svgs/nnnoise.svg')",
       
      },
      fontFamily: {
        Bebas: ["Bebas", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        trnansparent: "transparent",
        current: "currentColor",
        'kanzoto-blue': '#1A79F9',
        'kanzoto-lime':{
          100: '#03D19B',
          200: '#06C291'
        },
        'kanzoto-gray':{
          100:'#828282',
          200:'#717171'
        },
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
