import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vermicelles: "#e2bd78",
        sandybrown: "#f0bf6c",
        "grayish-blue": "#3D3E42",
        main: "#2A2A2A",
      },
    },
  },
  variants: {
    fill: ["hover"],
  },
  plugins: [],
};
export default config;
