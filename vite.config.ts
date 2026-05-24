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
      // Yeh inline code browser mein async_hooks ka crash hone se bachaaye ga
      'node:async_hooks': 'data:text/javascript,export const AsyncLocalStorage = class { disable() {}; getStore() {}; run(store, cb) { return cb(); }; enterWith(store) {}; };',
    },
  },
})
