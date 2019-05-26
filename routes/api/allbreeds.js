/* AIM OF FILE:

    - Routing to get breed dictionary from Cosmos

*/

const express = require("express");
const router = express.Router();
const breedsService = require("./../../dal/services/breedsService")

/*
 * URL: localhost:3001/api/breeds/
 * Response: Array of all breed documents
*/
// router.get("/", (req, res, next) => {
//     Breed.find({}, (err, breeds) => {
//       if (err) next(err);
//       else res.json(breeds);
//     });
//   });

router.get("/breeds", (req, res) => {
  breedsService.getBreeds(req, res);
});

module.exports = router;