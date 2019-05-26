const router = require("express").Router();
const Breed = require("../dal/models/breedSchema");

/*
 * URL: localhost:3001/api/breeds/
 * Response: Array of all breed documents
*/
router.get("/", (req, res, next) => {
    Breed.find({}, (err, breeds) => {
      if (err) next(err);
      else res.json(breeds);
    });
  });