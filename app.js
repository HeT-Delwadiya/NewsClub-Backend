require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//Import Routes
const postRoutes = require("./routes/post");

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

//Set Routes
app.use("/api",  postRoutes);

//server starter
const port = process.env.PORT || 8000;

app.listen(port, () => console.log("Server started on port: "+port));