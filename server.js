const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/dbConnect");

// connect to db
connectDB();

// routes
app.use(express.json());
app.use("/user",require("./routes/User"));

// create server
const PORT = process.env.PORT;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is running on ${PORT}`)
);
