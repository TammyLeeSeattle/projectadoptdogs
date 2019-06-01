/* AIM OF THIS FILE:

    - collect the form field data from the user inputs
    - use POST to create the profile
    - use PUT to update existing profiles
    - use GET (byID) for when someone navigates to /myprofile

*/

const express = require("express");
const router = express.Router();
const userService = require("./../../dal/services/userService");

router.get("/users", (req, res) => {
  userService.getUsers(req, res);
  res.json("victory");
});

router.post("/user", (req, res) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//   res.header("Access-Control-Allow-Headers", "Content-Type");
  userService.postUser(req, res);
  res.json(req.body);
});

module.exports = router;
