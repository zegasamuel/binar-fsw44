var express = require('express')
var router = express.Router()
const userController = require('../controller/userController')
const checkUserMiddleware = require('../middleware/checkUser')
const fileUploadMiddleware = require('../middleware/upload')

/* GET users listing. */

router.get('/createuser', function(req, res, next) {
    res.render('createuser', { title: 'Create User' });
  });
  
router.get('/', userController.getAllUser)
router.post('/login', userController.login)
// router.use(checkUserMiddleware.checkIfUserExist)
router.post('/', userController.addUser)
router.post('/register', fileUploadMiddleware, userController.register)
module.exports = router
