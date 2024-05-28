var express = require('express')
var router = express.Router()
const userController = require('../controller/userController')
const checkUserMiddleware = require('../middleware/checkUser')

/* GET users listing. */

router.get('/createuser', function(req, res, next) {
    res.render('createuser', { title: 'Create User' });
  });
  
router.get('/', userController.getAllUser)
router.post('/', checkUserMiddleware.checkIfUserExist, userController.addUser)
module.exports = router
