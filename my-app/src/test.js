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

main().catch(console.error);
