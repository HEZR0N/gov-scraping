// import mongoose from "mongoose";
// import mongoose = require("mongoose");
// local, clean, topics
// .connect('mongodb://127.0.0.1:27017/cinema', { useNewUrlParser: true })


// const mongoose = require('mongoose');
// // console.log(mongoose);
// mongoose.connect('mongodb://hezron:stonewall-unlocking-racism@136.51.3.69:2222/clean', { useNewUrlParser: true })
//     .catch(e => {
//         console.error('Connection error', e.message)
//     })
// const db = mongoose


// const mongoose = require('mongoose').connect('mongodb://hezron:stonewall-unlocking-racism@136.51.3.69:2222/clean', { useNewUrlParser: true })
//     .catch(e => {
//         console.error('Connection error', e.message)
//     })
// const db = mongoose


// module.exports = db






















// const { MongoClient } = require('mongodb');

// async function main() {
//     /**
//      * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//      * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
//      */
//     // const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/sample_airbnb?retryWrites=true&w=majority";
//     const uri = "mongodb://hezron:stonewall-unlocking-racism@136.51.3.69:2222/clean";

//     /**
//      * The Mongo Client you will use to interact with your database
//      * See https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html for more details
//      * In case: '[MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated...'
//      * pass option { useUnifiedTopology: true } to the MongoClient constructor.
//      * const client =  new MongoClient(uri, {useUnifiedTopology: true})
//      */
//     // const options = {
//     //     maxMessageSizeBytes: 100 * 1024 * 1024, // set the max message size to 100MB
//     //   };
//     const client = new MongoClient(uri);
//     console.log("HEYYY")

//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();
//         console.log("HEYYY AGAIN")

//         // Make the appropriate DB calls
//         await listDatabases(client);

//     } catch (e) {
//         console.error(e);
//     } finally {
//         // Close the connection to the MongoDB cluster
//         await client.close();
//     }
// }

// main().catch(console.error);

// /**
//  * Print the names of all available databases
//  * @param {MongoClient} client A MongoClient that is connected to a cluster
//  */
// async function listDatabases(client) {
//     databasesList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };































const { MongoClient } = require('mongodb');

async function main() {
  const uri = 'mongodb://136.51.3.69:27017/clean';
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db('clean');
    const collections = await database.listCollections().toArray();
    console.log('Collections:');
    collections.forEach(collection => console.log(` - ${collection.name}`));
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
console.log('HEYYYYYYYYYYYYY');
main().catch(console.error);