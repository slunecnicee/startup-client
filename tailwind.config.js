/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        headerColor: "#22435e",
        textColor: "#4682b4",
      },
      height: {
        videoHeight: "600px",
        imageHeight: "400px",
      },
      width: {
        formDivWidth: "2px",
        articleWidth: "70%",
        imageWidth: "600px",
      },
    },
  },
  plugins: [],
};
