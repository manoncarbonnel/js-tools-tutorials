import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  // https://vitejs.dev/config/
  return defineConfig({
    build: {
      sourcemap: 'hidden'
    },
    plugins: [vue()],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, 'src')
        }
      ]
    },
    test: {
      coverage: {
        reportsDirectory: 'reports/vitest/coverage',
        reporter: ['text', 'html']
      },
      environment: 'happy-dom',
      globals: true,
      outputFile: 'reports/vitest/report.json',
      reporters: ['verbose', 'json']
    }
  })
}
