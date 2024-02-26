import { MongoClient } from "mongodb";

const { DB_HOST, DB_PORT, DB_NAME } = process.env;

const url = `mongodb://${DB_HOST}:${DB_PORT}`;
const dbName = DB_NAME || "local";
const client = new MongoClient(url);

export async function connectMongoDB() {
  await client.connect();
  console.log("Connected successfully to server");
}

export function getDbClient() {
  return client.db(dbName);
}
