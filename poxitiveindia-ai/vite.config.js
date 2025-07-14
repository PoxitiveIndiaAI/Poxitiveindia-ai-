import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Poxitiveindia-ai-/', // 👈 this is important for GitHub Pages
})
