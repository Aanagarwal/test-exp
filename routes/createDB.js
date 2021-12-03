var express = require('express');
var router = express.Router();
const AWS = require('aws-sdk');
const config = require('../config.js');

const createData = function (req, res) {
    AWS.config.update(config.aws_remote_config);
    
    var docClient = new AWS.DynamoDB.DocumentClient()

    var table = "NodeJSPOC";

    var lastyear = 2015;
    var titlenew = "The Big New Movie";

    var params = {
        TableName:table,
        Item:{
            "lastyear": lastyear,
            "titlenew": titlenew,
            "id": "24"
        }
    };

    console.log("Adding a new item...");
    docClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Added item:", JSON.stringify(data, null, 2));
        }
    });
}

router.post('/', function(req, res, next) {
    console.log( req.query)
    // res.send('respond with a resource:' + req.query.secondName);
    res.send(createData());
});

module.exports = router;
