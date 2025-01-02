import { ghPages } from 'vite-plugin-gh-pages';  
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react() ],
  base: '/currency_converter/', // Replace with your GitHub repository name
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})


 