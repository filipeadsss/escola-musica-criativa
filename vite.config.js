import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        privacidade: resolve(import.meta.dirname, 'privacidade.html'),
        videos: resolve(import.meta.dirname, 'videos.html'),
        instrumentos: resolve(import.meta.dirname, 'instrumentos.html'),
        eventos: resolve(import.meta.dirname, 'eventos.html'),
        midia: resolve(import.meta.dirname, 'fotos-e-videos.html'),
      },
    },
  },
})
