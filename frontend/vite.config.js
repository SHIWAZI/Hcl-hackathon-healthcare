import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    

  ],
  test: {
    environment: 'jsdom',  // for browser-like testing environment
    globals: true,         // enables global APIs like describe, it, expect
    setupFiles: './src/setupTests.js', // optional setup file for jest-dom
  },
})
