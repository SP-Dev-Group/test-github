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
      // 1. Directs standard @ shortcuts to your src folder
      '@': path.resolve(__dirname, './src'),
      
      // 2. INTERCEPT ENGINE: Whenever a page asks for base44, give it our fake layout file instead!
      '@base44/sdk': path.resolve(__dirname, './src/lib/base44-mock.jsx'),
      '@/integrations/base44': path.resolve(__dirname, './src/lib/base44-mock.jsx'),
      '@/lib/AuthContext': path.resolve(__dirname, './src/lib/base44-mock.jsx'),
      '@/lib/query-client': path.resolve(__dirname, './src/lib/base44-mock.jsx'),
    },
  },
})
