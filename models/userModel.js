const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Please enter a username"],
    },

    email: {
      type: String,
      required: [true, "Please enter a email"],
      unique: [true, "Email address already exists"],
    },

    password: {
      type: String,
      required: [true, "Please enter a password"],
    },
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
