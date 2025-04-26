import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ['3e26-88-249-203-124.ngrok-free.app'] // buraya ngrok adresini ekledik
  }
})
