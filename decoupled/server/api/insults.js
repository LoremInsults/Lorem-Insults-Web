var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/insults', function(req, res, next) {
  knex('insults').select().then(function(data){
    res.json({data: data})
  })
});

module.exports = router;
