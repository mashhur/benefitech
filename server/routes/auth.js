const express   = require('express');
const env       = process.env.NODE_ENV || 'development';
const config    = require(__dirname + '/../config/config.json')[env];

var router    = new express.Router();


// handle the callback after facebook has authenticated the user
router.get('/somewhere');

module.exports = router;
