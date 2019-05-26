/* AIM OF FILE:

    - Set up API routing for the entire application

*/

const router = require("express").Router();
const breedRoutes = require("./allbreeds");
const userRoutes = require("./userprofile");

// Breed routes
router.use("/allbreeds", breedRoutes);

// User routes
router.use("/userprofile", userRoutes);

module.exports = router;
