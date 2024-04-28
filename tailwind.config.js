/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark: {
          200: "#181C20",
          100: "#101418",
        },
      },
      screens: {
        xs: "320px", // Extra small devices (portrait phones)
        sm: "640px", // Small devices (landscape phones)
        md: "768px", // Medium devices (tablets)
        lg: "1024px", // Large devices (desktops)
        xl: "1280px", // Extra large devices (large desktops)
        "2xl": "1536px", // 2X large devices (ultra large desktops)
        "3xl": "1920px", // 3X large devices (full HD monitors)
        "4xl": "2560px", // 4X large devices (QHD, WQHD monitors)
        "5xl": "3840px", // 5X large devices (4K UHD monitors)
      },
    },
  },
  plugins: [require("daisyui")],
}
