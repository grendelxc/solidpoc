import { join, resolve } from 'path';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import viteTsConfigPaths from 'vite-tsconfig-paths';

const rootPath = resolve('../../');
const projectRoot = join(rootPath, 'web');
const outDir = join(rootPath, 'dist/apps/web/public/js');

console.log(viteTsConfigPaths);

export default defineConfig({
  plugins: [
    solidPlugin({
      solid: {
        generate: 'dom',
        hydratable: true,
      },
    }),
    viteTsConfigPaths({
      root: '../../',
    }),
  ],

  build: {
    ssr: 'src/client.tsx',
    outDir,
    emptyOutDir: true,
    watch: {},
    rollupOptions: {
      external: [],
    },
  },

  ssr: {
    target: 'webworker',
    noExternal: true,
  },
});
