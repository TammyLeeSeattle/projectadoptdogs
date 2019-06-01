/* AIM OF FILE:

    - Separate routing requests from API vs. React

*/

const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

module.exports = router;
