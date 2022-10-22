import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  // server config
  server: {
    host: '0.0.0.0', // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
    cors: true,
    // https: false,
    proxy: {
      '/api': {
        target: 'https://mock.mengxuegu.com/mock/62fe100e84daf64a8217f3f3/vrc', // easymock
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [react(), tsconfigPaths()],
});
