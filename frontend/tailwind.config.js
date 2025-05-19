import daisyui from "daisyui";
import daisyUIThemes from "daisyui/src/theming/themes";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],

  daisyui: {
    themes: [
      {
        socialbloom: {
          primary: "#F25CA2", // Button, focus, etc.
          secondary: "#5DADF5", // Gradient end, hashtags
          accent: "#3ECF8E", // Retweet or accent
          neutral: "#1E1E1E", // Card background
          "base-100": "#121212", // Overall background
          info: "#69C0FF",
          success: "#3ECF8E",
          warning: "#F59E0B",
          error: "#FF4D6D",
          "--rounded-box": "1rem",
          "--rounded-btn": "1.5rem",
          "--rounded-badge": "1.9rem",
          "--animation-btn": "0.25s",
          "--btn-text-case": "capitalize",
          "--btn-focus-scale": "0.95",
          "--tab-border": "2px",
          "--tab-radius": "0.5rem",
        },
      },
    ],
  },
};
