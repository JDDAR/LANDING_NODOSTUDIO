import { mergeConfig } from 'vitest/config'
import { defineConfig } from 'vite'
import viteConfig from './vite.config'

export default mergeConfig(viteConfig, defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  }
}))
