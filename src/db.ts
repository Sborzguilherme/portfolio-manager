import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";
const dbName = "local";
const client = new MongoClient(url);

export async function connectMongoDB() {
  await client.connect();
  console.log("Connected successfully to server");
}

export function getDbClient() {
  return client.db(dbName);
}
