import express from 'express';
import boom from 'express-boom';
import router from './router';
import { connectMongoDB } from './db';

const app = express();
const port = process.env.NODE_DOCKER_PORT || 8080;
const serverName = 'porfolio-manager';

async function main() {
  await connectMongoDB();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(boom());

  app.use(router);

  app.get('/health', (_req, res) => {
    res.send(`${serverName} server is live on port ${port}`);
  });

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}

main();
