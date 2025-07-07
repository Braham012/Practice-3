const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required!"],
    },
    age: {
      type: Number,
      required: [true, "age is required!"],
      min: 1,
      max: 25,
    },
    Standard: {
      type: String,
      required: [true, "Standard is required"],
    },
    fees: {
      type: Number,
      required: [true, "fees is required"],
    },
    address: {
      type: String,
      required: [true, "address is required"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "email is required"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("Student", userSchema);

module.exports = { User };
