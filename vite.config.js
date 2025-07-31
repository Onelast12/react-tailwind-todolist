// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/react-tailwind-todolist/', // <-- HARUS sesuai dengan nama repo kamu
  plugins: [react()],
})
