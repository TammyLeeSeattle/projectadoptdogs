/*
AIM OF THIS FILE:

  - establish the schema definition for a "breed"
  - this will be the thing that allows us to calculate breed compatibility

*/

// ORM requirement
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//defining the schema for a dog's breed
const breedSchema = new Schema({
  breedName: { type: String, required: true },
  affectionLevel: { type: Number, required: true },
  adaptability: { type: Number, required: true },
  apartmentFriendly: { type: Number, required: true },
  barkingTendencies: { type: Number, required: true },
  catFriendly: { type: Number, required: true },
  childFriendly: { type: Number, required: true },
  dogFriendly: { type: Number, required: true },
  exerciseNeeds: { type: Number, required: true },
  grooming: { type: Number, required: true },
  healthIssues: { type: Number, required: true },
  intelligence: { type: Number, required: true },
  playfulness: { type: Number, required: true },
  sheddingLevel: { type: Number, required: true },
  socialNeeds: { type: Number, required: true },
  strangerFriendly: { type: Number, required: true },
  territorial: { type: Number, required: true },
  trainability: { type: Number, required: true },
  watchdogAbility: { type: Number, required: true }

  // for pictures after MVP: https://thedogapi.com/
  // description: String

});

const Breed = mongoose.model("Breed", breedSchema);

module.exports = Breed;
