import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/side-job-test/',
  build: {
    outDir: 'docs',
    cssMinify: true,
    reportCompressedSize: false
  }
})
