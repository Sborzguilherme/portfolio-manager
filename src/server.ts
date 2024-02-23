import express from "express";
import router from "./router";

const app = express();
const port = 3000;
const serverName = "porfolio-manager";

app.use(router);

app.get("/health", (_req, res) => {
  res.send(`${serverName} server is live on port ${port}`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
