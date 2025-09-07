//server.js

require("dotenv").config();
const mongoose = require("mongoose"); //imports mongoose and allows defintion of schemas, creation of models, and query MongoDB

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));

mongoose.connect(process.env.MONGO_URI) //connection string
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));

  
const { Schema, model } = mongoose; 
	//schema: defines structure of documents in MongoDB
	//Model: JS object to create, read, update, delete (CRUD) documents to that schema

const countSchema = new Schema({ // creates a schema for count 
  value: { type: Number, default: 0 } // the value is numeric and default is 0
});

const Count = model("Count", countSchema); // creates a model called count using countSchema
	//allows for Count.save(), Count.findOne()

const express = require("express"); // imports express library
const cors = require("cors"); // imports CORS middleware allows front end to talk to backend
const app = express(); // creates the express app object
app.use(cors()); // tells the express object app to use CORS
app.use(express.json()); //lets Express understand JSON request bodies

// Get count
app.get("/count", async (req, res) => {
  let count = await Count.findOne();
  if (!count) {
    count = new Count(); // create if none exists
    await count.save();
  }
  res.json({ count: count.value });
});

// Increment count
app.post("/increment", async (req, res) => {
  let count = await Count.findOne();
  if (!count) {
    count = new Count();
  }
  count.value++;
  await count.save();
  res.json({ count: count.value });
});

app.listen(3003, () => console.log("Server running on http://localhost:3003"));

/*mongodb+srv://etam:etam123@cluster0.wv1rqra.mongodb.net/gpaapp?retryWrites=true&w=majority&appName=Cluster0*/