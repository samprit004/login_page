import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// ✅ NO @tailwindcss/vite import
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  
})
