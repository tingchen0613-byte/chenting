import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '127.0.0.1',
    port: 4173,
    strictPort: true,
    // The Codex in-app browser proxies HTTP but not Vite's HMR websocket.
    // Disabling HMR keeps the local preview stable and removes false network errors.
    hmr: false,
  },
})
