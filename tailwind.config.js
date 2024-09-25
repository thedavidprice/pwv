/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "ibm-plex-mono": ['"IBM Plex Mono"', "monospace"],
        "ibm-plex-sans": ['"IBM Plex Sans"', "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        "space-grotesk": ['"Space Grotesk"', "sans-serif"],
        heading: ["Poppins", "sans-serif"],
        body: ["Poppins", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
        link: ["IBM Plex Mono", "monospace"],
      },
      fontWeight: {
        "heading-bold": "700",
      },
    },
  },
  plugins: [],
};
