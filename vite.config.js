import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/hito1/',  // Esta es la base URL correspondiente a tu repositorio
  plugins: [react()],
});
