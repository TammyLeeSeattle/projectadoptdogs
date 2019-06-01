/* AIM OF FILE:

    - Set up API routing for the entire application

*/

const router = require("express").Router();
const breedRoutes = require("./allbreeds");
const userRoutes = require("./userprofile");
const dogRecommendations = require("./dogrecommendations")

// Breed routes
router.use("/allbreeds", breedRoutes);

// User routes
router.use("/userprofile", userRoutes);

// Display recommended dog routes
router.use("/dogrecommendations", dogRecommendations)

module.exports = router;
