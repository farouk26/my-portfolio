/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
require("dotenv").config()

module.exports = {
  eslint: {
    dirs: ["src"],
  },
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "plus.unsplash.com", "img.freepik.com"],
  },
}
