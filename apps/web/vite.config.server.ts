import { join, resolve } from 'path';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import viteTsConfigPaths from 'vite-tsconfig-paths';

const rootPath = resolve('../../');
const projectRoot = join(rootPath, 'web');
const outDir = join(rootPath, 'dist/apps/web');

console.log(viteTsConfigPaths);

export default defineConfig({
  plugins: [
    solidPlugin({
      solid: {
        generate: 'ssr',
        hydratable: true,
      },
    }),
    viteTsConfigPaths({
      root: '../../',
    }),
  ],

  build: {
    ssr: 'src/server.tsx',
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      external: [],
    },
  },
});
