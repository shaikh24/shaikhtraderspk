import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      // Jab TanStack browser build ke waqt Node ka feature maange, to hum use ignore karwa dete hain
      'node:async_hooks': 'unenv/runtime/mock/empty', 
    },
  },
  build: {
    rollupOptions: {
      // Yeh ensure karega ke Rollup builds is external package ki wajah se na rukein
      external: ['node:async_hooks'],
    },
  },
})
