// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Tambahan penting biar build output PASTI ke folder "dist" dan bersih setiap kali build
  build: {
    outDir: 'dist',        // eksplisit tulis biar nggak ambigu
    emptyOutDir: true,     // otomatis hapus isi folder dist sebelum build baru
  },

  // Optimize deps kamu (exclude lucide-react supaya nggak di-pre-bundle, hindari konflik)
  // Opsional: supaya base path aman kalau nanti pakai subfolder
  base: '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});