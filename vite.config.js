import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/test-github/', // 👈 Updated with your repository name
  logLevel: 'error',
  plugins: [react()]
})
