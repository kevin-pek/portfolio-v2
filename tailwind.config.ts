import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ["var(--font-geist-sans)"],
      //   mono: ["var(--font-geist-mono)"],
      // },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      dark: {
        "primary": "#5DE4C7",
        "primary-focus": "#66C5AE", // will be inferred if not specified
        "primary-content": "#183831",
        "secondary": "#A4EEED",
        // "secondary-focus": "#56CDCB", // will be inferred if not specified
        "accent": "#C9AFF0",
        // "accent-focus": "#B18CE7", // will be inferred if not specified
        "neutral": "#2B2938",
        "base-100": "#181721",
        "base-200": "#1E1D2A",
        "base-content": "#E0DEF2", // will be inferred if not specified
        "info": "#8AE3F8",
        // "info-content": "#7BC1E4", // will be inferred if not specified
        "success": "#5DE4C7",
        // "success-content": "#66C5AE", // will be inferred if not specified
        "warning": "#F4C886",
        // "warning-content": "#EAAE7E", // will be inferred if not specified
        "error": "#E9678C",
        // "error-content": "#CE5076" // will be inferred if not specified
      }
    },
    "light"]
  }
}
export default config
