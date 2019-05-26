const mongoose = require("mongoose");
require('dotenv').config();

function connect() {
    const { COSMOSDB_CONNSTR, COSMODDB_USER, COSMOSDB_PASSWORD } = process.env;

    mongoose
    	.connect(
            COSMOSDB_CONNSTR, 
            { auth: { user: COSMODDB_USER, password: COSMOSDB_PASSWORD }, useNewUrlParser: true },
        )
    	.then(() => console.log("Connection to CosmosDB successful is somehow successful!"))
        .catch(err => console.error(err));
        
    console.log(COSMOSDB_CONNSTR);
}

    module.exports = {
        connect
    };

// mongoose
// 	.connect(process.env.COSMOSDB_CONNSTR + '?ssl=true&replicaSet=globaldb', {
// 		auth: {
// 			user: process.env.COSMODDB_USER,
// 			password: process.env.COSMOSDB_PASSWORD,
// 		},
// 	})
// 	.then(() => console.log('Connection to CosmosDB successful'))
// 	.catch(err => console.error(err));