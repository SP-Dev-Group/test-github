import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/test-github/',
  logLevel: 'error',
  plugins: [react()],
  resolve: {
    alias: {
      // This tells Vite that whenever it sees "@/", it should look in the "src" folder
      '@': path.resolve(__dirname, './src'),
    },
  },
})
