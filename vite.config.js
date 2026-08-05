import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // bind to all interfaces so the sandbox preview can reach it
    port: 5173,
    allowedHosts: true, // allow the proxied preview host (*.e2b.app)
  },
  preview: {
    host: '0.0.0.0',
    allowedHosts: true,
  },
});
