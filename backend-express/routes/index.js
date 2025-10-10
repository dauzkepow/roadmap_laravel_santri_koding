//route API register

const express = require('express') 
const router = express.Router();
const registerController = require('../controllers/RegisterController');
const loginController = require('../controllers/LoginController');
const verifyToken = require('../middlewares/auth'); //import middleware verifyToken
const userController = require('../controllers/UserController');

//import validate register and login
const { validateRegister, validateLogin } = require('../utils/validators/auth');

//definisikan route untuk register method POST, endpoint /register
router.post('/register', validateRegister, registerController.register);

//definisikan route method = post, endpoint /login
router.post('/login', validateLogin, loginController.login);

//definisikan route for user = get, verifikasi token, panggil fungction findUsers
router.get('/admin/users', verifyToken, userController.findUsers);

module.exports = router //export router