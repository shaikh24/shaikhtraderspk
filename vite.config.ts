import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      // Yeh perfect client-side memory storage mock hai jo typing ya re-rendering par website freeze nahi hone dega
      'node:async_hooks': 'data:text/javascript,export const AsyncLocalStorage = class { constructor() { this.store = new Map(); } disable() { this.store.clear(); } getStore() { return this.currentStore; } run(store, cb, ...args) { const prev = this.currentStore; this.currentStore = store; try { return cb(...args); } finally { this.currentStore = prev; } } enterWith(store) { this.currentStore = store; } };',
    },
  },
})
