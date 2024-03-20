import express from 'express';
import router from './router';
import { connectMongoDB } from './db';
import { errorHandler } from './middlewares';

const app = express();
const port = process.env.SERVER_PORT || 8080;
const serverName = 'porfolio-manager';

async function main() {
  await connectMongoDB();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(router);

  app.get('/health', (_req, res) => {
    res.send(`${serverName} server is live on port ${port}`);
  });

  app.use(errorHandler);

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}

main();
