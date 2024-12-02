var express = require('express');
const { doSignup } = require('../controllers/userController');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/signup',doSignup)

module.exports = router;
