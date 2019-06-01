/* AIM OF THIS FILE:

    - define user survey results page routing

*/
const express = require("express");
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

const config = {
  grant_type: "client_credentials",
  client_id: process.env.client_id,
  client_secret: process.env.client_secret
};

router.post("/", (req, res) => {
    let breedList = req.body['chosenBreeds'];

    axios.post('https://api.petfinder.com/v2/oauth2/token', config)
    .then(authRes => {
        let headers = { 'Authorization': 'Bearer ' + authRes.data.access_token,'Content-Type': 'application/json' };

        axios
            .get("https://api.petfinder.com/v2/animals?type=Dog&breed=" + breedList,  { headers: headers})
            .then(petfinderResponse => { 
                res.send(petfinderResponse.data); 
            })
            .catch(err => {
                res.status(400).send(err)
            });
        }).catch(err => res.status(400).send(err));
    });

module.exports = router;