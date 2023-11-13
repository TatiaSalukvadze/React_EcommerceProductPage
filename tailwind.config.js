/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        360: "360px",
        445: "445px",
        1002: "1002px",
      },
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans"],
      },
    },
  },
  plugins: [],
};
