/*
AIM OF THIS FILE:

  - establish the schema definition for a "user" (aka. a person who creates an account)
  - this will define how a user's Profile will be stored in a Cosmos collection

*/

// ORM requirement
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//defining the schema for a user's Profile
const userSchema = new Schema ({
    id: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    contactEmail: { type: String, required: true }
});

const User = mongoose.model("User", userSchema)

module.exports = User;