import { join, resolve } from 'path';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import nodeResolve from '@rollup/plugin-node-resolve';
import common from '@rollup/plugin-commonjs';

const rootPath = resolve('../../');
const projectRoot = join(rootPath, 'web');

export default defineConfig(({ command, mode, ssrBuild }) => {
  const solidPluginGenerate = ssrBuild ? 'ssr' : 'dom';
  const ssrEntry = ssrBuild ? 'src/server.tsx' : 'src/client.tsx';
  const outDirPath = ssrBuild ? './' : './public/js';

  return {
    plugins: [
      solidPlugin({
        solid: {
          generate: solidPluginGenerate,
          hydratable: true,
        },
      }),
      viteTsConfigPaths({
        root: '../../',
      }),
    ],

    build: {
      ssr: ssrEntry,
      outDir: join(rootPath, 'dist/apps/web', outDirPath),
      ssrManifest: true,
      emptyOutDir: true,
      reportCompressedSize: true,
      cssCodeSplit: true,
      sourcemap: true,
      rollupOptions: {
        // Packages that should not be bundled
        external: [],
      },
    },
  };
});
