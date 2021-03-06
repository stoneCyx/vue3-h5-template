import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx'; //支持jsx组件 
import path from 'path';
import eslintPlugin from 'vite-plugin-eslint';
import legacy from '@vitejs/plugin-legacy';
import { viteMockServe } from "vite-plugin-mock";
import { UserConfigExport, ConfigEnv } from "vite";


// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [
      vue(),
      vueJsx(),
      legacy({
        targets: ['ie >= 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime']
      }),
      viteMockServe({
        mockPath: "mock",
        localEnabled: process.env.DEV_MOCK === "ON",
        prodEnabled: process.env.PROD_MOCK === "ON",
        logger: true
      }),
      eslintPlugin({
        cache: false,
        include: ['src/**/*.vue', 'src/**/*.ts', 'src/**/*.tsx']
      })],
    base: "./",//打包路径
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      }
    },
    server: {
      port: 4000,//启动端口
      open: true,
      proxy: {
        '/api': 'http://localhost:3000/'//代理地址
      },
      cors: true
    }
  }
}