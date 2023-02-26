/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express, { Request } from 'express';
import * as path from 'path';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', async (req: Request, res) => {
  const timeout = +(req.query as any).timeout || 1000;
  await new Promise<void>((resolve, reject) => {
    console.log('---------------------')
    console.log('Responding to request')
    console.log(`Timeout: ${timeout}`)
    console.log('\n')

    setTimeout(() => {
      resolve();
    }, timeout)
  });

  res.send({ success: true, data: { timeout } });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
