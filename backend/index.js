const express = require("express"); //server
const mongoose = require("mongoose"); //our databdase
const morgan = require("morgan"); //important for see changes
const cors = require("cors"); //remove cors policy
const fs = require("fs"); //to read routes folder
const { readdirSync } = fs;

require("dotenv").config(); //import dotenv

const app = express(); //object of express

//MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI) //.connect(mongo_uri(which is in .env file))
  .then(() => {
    console.log("DB Connected!!");
  })
  .catch((err) => {
    console.log("DB CONNECTION ERROR -> ", err.message);
  });

//MiddleWares
app.use(express.json({ limit: "5mb" })); //A middleware which parses JSON data from the request body, making it available in the req.body property
app.use(express.urlencoded({ extended: true })); //middleware to parse URL-encoded form data,making it available in the req.body property.
app.use(cors());
app.use(morgan());

//autoload routes
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`))); //readdirSync("./routes"):=>reurnds array of file_names

app.listen(8000, () => console.log("app is running on localhost 8000!!"));

// readdirSync("directory_name").map((variable)=>app.use("domain start with :'/api'"),require("directory_name/${variable}"))
