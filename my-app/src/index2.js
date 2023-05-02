const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");

const app = express();
const port = 5000;

const corsOptions = {
    origin: 'https://projecttrace.netlify.app',
    credentials: false,
};
app.use(cors(corsOptions));

mongoose.connect('mongodb://136.51.3.69:27017/keywords',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});
app.get('/DIBBSAward2023-04-13', async (req, res) => {
    const cursor = await db.collection("DIBBSAward2023-04-13").find();
    objects = [];
    await cursor.forEach((doc) => {
        objects.push(doc)
        console.log(doc._id);
      });
      res.send(objects)
});
app.get('/MRIAward2023-04-16', async (req, res) => {
    const cursor2 = await db.collection("MRIAward2023-04-16").find();
    objects2 = [];
    await cursor2.forEach((doc) => {
        objects2.push(doc)
        console.log(doc._id);
      });
      res.send(objects2)
});
app.get('/SI2Award2023-04-24', async (req, res) => {
    const cursor3 = await db.collection("SI2Award2023-04-24").find();
    objects3 = [];
    await cursor3.forEach((doc) => {
        objects3.push(doc)
        console.log(doc._id);
      });
      res.send(objects3)
});
app.get('/CSSIAward2023-04-16', async (req, res) => {
    const cursor4 = await db.collection("CSSIAward2023-04-16").find();
    objects4 = [];
    await cursor4.forEach((doc) => {
        objects4.push(doc)
        console.log(doc._id);
      });
      res.send(objects4)
});
app.get('/CCFAward2023-04-11', async (req, res) => {
    const cursor5 = await db.collection("CCFAward2023-04-11").find();
    objects5 = [];
    await cursor5.forEach((doc) => {
        objects5.push(doc)
        console.log(doc._id);
      });
      res.send(objects5)
});
app.get('/OACAward2023-04-18', async (req, res) => {
    const cursor6 = await db.collection("OACAward2023-04-18").find();
    objects6 = [];
    await cursor6.forEach((doc) => {
        objects6.push(doc)
        console.log(doc._id);
      });
      res.send(objects6)
});
app.get('/CICIAward2023-04-10', async (req, res) => {
    const cursor7 = await db.collection("CICIAward2023-04-10").find();
    objects7 = [];
    await cursor7.forEach((doc) => {
        objects7.push(doc)
        console.log(doc._id);
      });
      res.send(objects7)
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
