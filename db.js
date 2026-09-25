const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function connectToDatabase() {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db("giftlink");
}

module.exports = connectToDatabase;
