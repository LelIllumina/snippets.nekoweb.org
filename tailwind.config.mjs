import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: [
        "Lexend",
        "Inter",
        "Roboto",
        "Helvetica Neue",
        "Arial Nova",
        "Nimbus Sans",
        "Arial",
        "sans-serif",
      ],
      serif: [
        "Instrument Serif",
        "Times New Roman",
        "Times",
        "ui-serif",
        "Georgia",
        "serif",
      ],
      mono: ["Jetbrains Mono", "ui-monospace", "SFMono-Regular"],
      "sans-alt": [
        "Lemon Milk",
        "Arial",
        "Nimbus Sans",
        "Arial Nova",
        "Helvetica Sans",
        "Roboto",
        "Inter",
        "sans-serif",
      ],
    },

    extend: {
      colors: {
        bg: "#1c1b22",
        "box-dark": "#1e1e1e",
        "box-light": "#e1e1e1",
      },
    },
  },
  plugins: [typography],
};
