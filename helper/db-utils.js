import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb://events:3k1G0dAESvJjAdVv@cluster0-shard-00-00.raoc2.mongodb.net:27017,cluster0-shard-00-01.raoc2.mongodb.net:27017,cluster0-shard-00-02.raoc2.mongodb.net:27017/events?ssl=true&replicaSet=atlas-ujwcvx-shard-0&authSource=admin&retryWrites=true&w=majority"
  );

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();
  const result = await db.collection(collection).find().sort(sort).toArray();
  return result;
}
