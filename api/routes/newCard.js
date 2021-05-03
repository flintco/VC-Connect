var express = require('express');
var router = express.Router();

// POST method route to add new card to database
router.post('/', function (req, res) {
    res.send('POST request for new card')
})

module.exports = router;