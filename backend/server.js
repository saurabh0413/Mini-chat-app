const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const { application } = require("express");
const connectDb = require("./config/db");
const colors = require("colors")
const userRoutes = require("./routes/userRoutes")
const app = express();
dotenv.config().parsed;
connectDb();
app.get("/", (req, res) => {
  res.send("get request to homepage");
});

app.use('/api/user',userRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server styarted at ${PORT}`.red.bold));
