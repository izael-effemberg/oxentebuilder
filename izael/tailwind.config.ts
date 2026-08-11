import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#171613",
        graphite: "#2b2924",
        ivory: "#f7f3ea",
        paper: "#fffaf1",
        brass: "#ad8b55",
        sage: "#607064"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Georgia", "ui-serif", "serif"]
      },
      boxShadow: {
        editorial: "0 20px 50px rgba(23, 22, 19, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
