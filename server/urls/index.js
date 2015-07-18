var router = require('express').Router();
var db = require('./../database');

router.post('/create', function(req, res) {
  var url = req.body.url;
  var timestamp = req.body.url

  if (url === undefined || timeStamp === undefined) {
    res.json({
      response: 'failed',
      status: 'bad post data'
    });
  }
  else {
    console.log('insert valid data')
    //TODO: Insert url into database 
  }
});

module.exports = router;

