var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require('fs');
var Preferences = require('../models/preferences');
var preferences = new Preferences();


/* GET home page. */
router.get('/', function (req, res) {
    console.log('get homepage')
    preferences.readFile(null, function(err, data) {
        res.send(data);
    });
});

router.post('/storyboard', function (req, res) {
    const filename = req.body.filename;
    preferences.readFile(null, function(err, data) {
        data.storyboard = filename;
        preferences.writeFile(null, data, function (err, data) {
            res.send(data);
        });
    });
})

module.exports = router;
