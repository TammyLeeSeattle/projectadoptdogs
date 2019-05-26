/* AIM OF THIS FILE:

    - create methods to create a user, update a user and get a user
    - import Cosmos things and use mongoose to update and save data

*/

// DEPENDENCIES
const db = require("../models/index")
require("./mongo").connecct();

// DEFINE METHODS FOR routes > userprofile.js (so the front-end can use these routes)

// to GET all users
function getUsers(req, res) {
    const docquery = User.find({});
    docquery
        .exec()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).send(err);
            return;
        });
}

// to CREATE a new user
function postUser(req, res) {
    const originalUser = { 
        uid: req.body.uid, 
        firstName: req.body.firstName,
        lastName: req.body.lastName, 
        contactEmail: req.body.contactEmail 
    };
    const user = new User(originalUser);
    user.save(err => {
      if (checkServerError(res, err)) return;
      res.status(201).json(user);
      console.log("User created successfully!");
    });
  }
  
function checkServerError(res, err) {
  if (err) {
    res.status(500).send(err);
    return err;
  }
}

module.exports = {
    getUsers,
    postUser
};