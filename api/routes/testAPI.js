var express = require("express");
var router = express.Router();
let config = require('../config.js');

router.get("/",function(req,res,next){
    res.send("API Response 1");
});

module.exports = router;

