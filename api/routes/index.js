var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// POST method route
router.post('/', function (req, res) {
  res.send('POST request to the homepage')
})


module.exports = router;
