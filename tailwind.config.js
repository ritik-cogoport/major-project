/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        '3xl':'0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
        colors: {
          "gray-25": "#fcfcfd",
          "primary-501": "#f9f5ff",
          "primary-7001": "#6941c6",
          "gray-2001": "#eaecf0",
          "primary-6001": "#7f56d9",
          "base-white1": "#fff",
          "gray-3001": "#d0d5dd",
          "gray-7001": "#344054",
          "gray-6001": "#475467",
          "gray-9001": "#101828",
        },
        fontFamily: { "text-sm-medium1": "Inter" },
      },
      scale: {
        '120': '1.02',
        '110': '1.01',
      }
    },
  },
  plugins: [],
}
