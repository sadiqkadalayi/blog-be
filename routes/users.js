var express = require('express');
const { doSignup, doLogin, getData } = require('../controllers/userController');
const verifyUser = require('../middlewares/auth');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/signup',doSignup)
router.post('/login', doLogin)
router.get('/getData', verifyUser, getData)

module.exports = router;
