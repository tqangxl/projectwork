var express = require('express');
var router = express.Router();
var urls = require('../models/urls')


/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(urls)
  res.render('index', { data: urls,title: 'Express' });
});

router.get('/getData', function(req, res, next){
  console.log(urls)
  res.render('index', { data: urls });
})

module.exports = router;
