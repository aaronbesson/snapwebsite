/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./node_modules/flowbite/**/*.js"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: { "50": "#638F75", "100": "#638F75", "200": "#638F75", "300": "#638F75", "400": "#638F75", "500": "#638F75", "600": "#638F75", "700": "#638F75", "800": "#638F75", "900": "#638F75" }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
