import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@algorithms': path.resolve(__dirname, './src/algorithms'),
      '@data': path.resolve(__dirname, './src/data'),
    },
  },
});