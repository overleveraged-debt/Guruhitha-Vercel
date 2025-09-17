import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Vercel configuration - root path
  build: {
    outDir: 'dist', // Vercel standard output directory
    assetsDir: 'assets',
    sourcemap: false, // Disable sourcemaps for production
    minify: 'terser', // Better minification for production
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          sanity: ['@sanity/client', '@sanity/image-url']
        }
      }
    }
  },
  server: {
    port: 3000,
    host: true
  },
  preview: {
    port: 3000,
    host: true
  }
})
