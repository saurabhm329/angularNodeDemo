var express = require('express');
var router = express.Router();

var userController = require('../controller/userController');
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.get('/getdata', function (req, res, next) {
  userController.getdata(req.body, function (result) {
    res.send(result);
  });
});
module.exports = router;
