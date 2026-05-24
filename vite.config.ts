import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite' // Yeh plugin humne import kiya

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Yeh line aapki website ki saari styling wapas le aayegi
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      // Yeh inline code browser mein async_hooks ka crash hone se bachaaye ga
      'node:async_hooks': 'data:text/javascript,export const AsyncLocalStorage = class { disable() {}; getStore() {}; run(store, cb) { return cb(); }; enterWith(store) {}; };',
    },
  },
})
