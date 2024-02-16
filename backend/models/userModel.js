const mongoose = require("mongoose");

// to create a schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

// Model is used to interact with the database

const user = mongoose.model("user", userSchema);

module.exports = user;
