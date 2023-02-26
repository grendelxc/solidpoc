import path from 'path';
import express from 'express';
import { renderToStream, renderToString } from 'solid-js/web';
import { createProxyMiddleware } from 'http-proxy-middleware';

import { createServer as createViteServer } from 'vite';

import { App } from './App/App';

export async function createServer() {
  // Create Vite server in middleware mode and configure the app type as
  // 'custom', disabling Vite's own HTML serving logic so parent server
  // can take control
  // const vite = await createViteServer({
  //   server: { middlewareMode: true },
  //   appType: 'custom'
  // })

  const app = express();
  const port = 3100;

  // Use vite's connect instance as middleware. If you use your own
  // express router (express.Router()), you should use router.use
  // app.use(vite.middlewares)

  const publicFolder = path.join(process.cwd(), '../../dist/apps/web/public');

  app.use(express.static(publicFolder));
  app.use('/api', createProxyMiddleware({ target: 'http://localhost:3333', changeOrigin: true }));
  // app.get('(.*)', (req, res) => renderToStream(() => <App hostname={req.hostname} />).pipe(res));
  app.get("(.*)", (req, res) => {
    let html;
    try {
      html = renderToString(() => <App hostname={req.hostname} />);
    } catch (err) {
      console.error(err);
    } finally {
      res.send(html);
    }
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

createServer();
