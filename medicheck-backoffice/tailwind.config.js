/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "grey-hover": "rgba(217, 217, 217, 0.28)",
        "table-row-grey": "rgba(223, 222, 222, 0.21)",
      },
    },
  },
  plugins: [],
};
