import express from "express";
import router from "./router";
import { connectMongoDB } from "./db";

const app = express();
const port = 3000;
const serverName = "porfolio-manager";

async function main() {
  await connectMongoDB();

  app.use(router);

  app.get("/health", (_req, res) => {
    res.send(`${serverName} server is live on port ${port}`);
  });

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}

main();
