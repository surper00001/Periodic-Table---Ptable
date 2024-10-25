import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', 'vuex', 'vue-i18n'],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),],
  server: {
    // 设置代理  
    proxy: {
      // 匹配所有以 /api 开头的请求  
      '/api': {
        target: 'https://api.materialsproject.org/rest/v2', // 目标代理地址  
        changeOrigin: true, // 是否跨域  
        rewrite: (path) => path.replace(/^\/api/, ''), // 重写路径，去掉前缀  
      },
      // 如果有多个代理，可以继续添加  
      // '/other-api': {  
      //   target: 'http://other.example.com',  
      //   changeOrigin: true,  
      //   rewrite: (path) => path.replace(/^\/other-api/, '')  
      // }  
    },
  },
})
