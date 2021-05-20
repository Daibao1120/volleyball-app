const { MongoClient } = require("mongodb");
const fs = require("fs");
// Connection URI
const uri = "mongodb://localhost:27017/";
// Create a new MongoClient
const client = new MongoClient(uri, { useUnifiedTopology: true });
(async () => {
    await client.connect();
})().catch(console.dir);
module.exports = client;