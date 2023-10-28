import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

const globalCss = defineGlobalStyles({
  h3: {
    color: "#fafafa",
    fontSize: "xl",
    lineHeight: 2,
    marginTop: "6",
    marginBottom: "2",
  },
  p: {
    lineHeight: 2,
  },
  ul: {
    listStyle: "inside",
    listStyleType: "circle",
  },
  ol: {
    listStyle: "inside",
    listStyleType: "decimal",
  },
  blockquote: {
    borderLeft: "3px solid",
    borderColor: "#a3a3a3",
    paddingLeft: "4",
  },
  pre: {
    bgColor: "#333333",
    borderRadius: "md",
    p: "4",
  },
});

export default defineConfig({
  preflight: true,
  globalCss,
  include: [
    "./src/**/*.{ts,tsx,js,jsx,astro}",
    "./pages/**/*.{ts,tsx,js,jsx,astro}",
  ],

  exclude: [],

  theme: {
    extend: {},
  },

  outdir: "styled-system",
});
