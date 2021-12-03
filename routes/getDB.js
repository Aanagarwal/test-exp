var express = require('express');
var router = express.Router();
const AWS = require('aws-sdk');
const config = require('../config.js');

const getData = function (req, res) {
    AWS.config.update(config.aws_remote_config);

    const docClient = new AWS.DynamoDB.DocumentClient();

    var params = {
        TableName: 'NodeJSPOC',
        Key: {
            "id": "234"
        }
    };

    docClient.get(params, function (err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("GetItem succeeded :", JSON.stringify(data, null, 2));
            response = JSON.stringify(data, null, 2);
        }
    });
}

/* GET users listing. */
router.get('/', function (req, res, next) {
    console.log(req.query)
    // res.send('respond with a resource:' + req.query.secondName);
    res.send(getData());
});

module.exports = router;