import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
        ".badge": {
          "border": "none",
        }
      },
    },{
      light: {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        ...require("daisyui/src/theming/themes")["light"],
        "primary": "#4301FF",
        "neutral": "#ddd",
        "neutral-content": "#5D585A",
        "base-content": "#2D282A",
        "base-100": "#fafafa",
        "base-200": "#f6f6f6",
        ".badge": {
          "border-style": "solid",
          "border-width": "1px",
          "border-color": "currentColor"
        }
      }
    }]
  }
}
export default config
