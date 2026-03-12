/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0f766e", // Teal-700 لتحسين التباين
          dark: "#0d655f",
          light: "#ccfbf1",
        },

        content: {
          title: "#111827",
          body: "#4b5563",
          light: "#9ca3af",
        },

        surface: {
          DEFAULT: "#ffffff",
          alt: "#f9fafb",
        },

        accent: "#ef4444",
      },
    },
  },
  plugins: [],
};
