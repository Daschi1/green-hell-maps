import flowbitePlugin from "flowbite/plugin";
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}", "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"],

  darkMode: "selector",

  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        // green
        primary: {
          "50": "#f0fdf4",
          "100": "#dcfce7",
          "200": "#bbf7d0",
          "300": "#86efac",
          "400": "#4ade80",
          "500": "#22c55e",
          "600": "#16a34a",
          "700": "#15803d",
          "800": "#166534",
          "900": "#14532d",
        },
      },
    },
  },

  plugins: [flowbitePlugin],
} as Config;
