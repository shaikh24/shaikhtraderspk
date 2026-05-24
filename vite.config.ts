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
      // Yeh browser build ke waqt async_hooks ko khali safe object de dega taake crash na ho
      'node:async_hooks': 'unenv/runtime/mock/empty',
    },
  },
  build: {
    rollupOptions: {
      // Is se production build bina ruke successfully complete ho jayegi
      external: [],
    },
  },
})
