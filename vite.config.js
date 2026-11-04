import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base './' keeps asset paths relative so the build works on any static host,
// including GitHub Pages project sites (served from /<repo-name>/).
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
