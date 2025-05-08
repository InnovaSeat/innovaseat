import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: './',  // Assicurati che Vite cerchi dalla cartella principale
  build: {
    outDir: 'dist',  // La cartella di uscita per i file compilati
  }
})
