const express = require("express");
const mongoose = require("mongoose");
const { User } = require("./model/user");
const { connectDb } = require("./config/db");
const { userRoutes } = require("./routes/userRoutes");

const app = express();
app.use(express.json());
connectDb();

app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(4000, () => {
  console.log(`your server is running at http://localhost:4000`);
});
