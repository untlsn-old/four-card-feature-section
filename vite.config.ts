import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@components': path.resolve('./src/components'),
      '@assets': path.resolve('./src/assets'),
      'lodash': 'lodash-es',
    }
  }
})
