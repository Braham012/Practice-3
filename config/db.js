const mongoose = require("mongoose");

function connectDb() {
  mongoose
    .connect("mongodb://localhost:27017/MyDatabase")
    .then(() => {
      console.log("Database Connected :) ");
    })
    .catch((e) => {
      console.log("Error Connecting to Database :( ");
    });
}

module.exports = {
  connectDb,
};
