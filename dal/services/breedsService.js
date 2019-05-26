/* AIM OF THIS FILE:

    - Get the breed model
    - Connect to cosmos
    - Create a variable that uses the breed.find method to define a query that returns all breeds
    - Runs a query function with a promise to get a list of all heroes, where the response status is 200
    - Send back the error message if the status is 500
    - Gets all breeds

*/

const Breed = require("./../models/breedSchema");

require("./mongo").connect();

function getBreeds (req, res) {
    const docquery = Breed.find({});
    docquery
        .exec()
        .then(breeds => {
            res.status(200).json(breeds);
        })
        .catch(err => {
            res.status(500).send(err);
            return;
        });
};


module.exports = {
    getBreeds
};