var express = require('express');
var router = express.Router();
const AWS = require('aws-sdk');
const config = require('../config.js');

const updateData = function (req, res) {

    AWS.config.update(config.aws_remote_config);

    var docClient = new AWS.DynamoDB.DocumentClient()

    //var table = "NodeJSPOC";
    var year = 2015;
    var title = "The Big New Movie";
    var id = "234";
    // Update the item, unconditionally,

    var params = {
        TableName: "NodeJSPOC",
        Key: {
            "id": "234"
        },
        UpdateExpression: "Set title= :title",
        ExpressionAttributeValues: {
            ":title": " new text correction "

        },
        ReturnValues: "UPDATED_NEW"
    };

    console.log("Updating the item...");
    docClient.update(params, function (err, data) {
        if (err) {
            console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
        }
    });
}


router.post('/', function (req, res, next) {
    console.log(req.query)
    // res.send('respond with a resource:' + req.query.secondName);
    res.send(updateData());
});

module.exports = router;