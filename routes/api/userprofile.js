/* AIM OF THIS FILE:

    - collect the form field data from the user inputs
    - use POST to create the profile
    - use PUT to update existing profiles
    - use GET (byID) for when someone navigates to /myprofile

*/

const express = require("express");
const router = express.Router();
const userService = require("./../../dal/services/userService")

router.get("/users", (req,res) => {
    userService.getUsers(req,res);
});

router.post("/user", (req, res) => {
    userService.postUser(req, res);
});

module.exports = router;