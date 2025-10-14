//route API register

const express = require('express') 
const router = express.Router();
const registerController = require('../controllers/RegisterController');
const loginController = require('../controllers/LoginController');
const verifyToken = require('../middlewares/auth'); //import middleware verifyToken
const userController = require('../controllers/UserController');

//import validate register and login
const { validateRegister, validateLogin } = require('../utils/validators/auth');

//import validate user
const { validateUser } = require('../utils/validators/users');



//definisikan route untuk register method POST, endpoint /register
router.post('/register', validateRegister, registerController.register);

//definisikan route method = post, endpoint /login
router.post('/login', validateLogin, loginController.login);

//definisikan route for user = get, verifikasi token, panggil fungction findUsers
router.get('/admin/users', verifyToken, userController.findUsers);

//definisikan route for user create, perlu validasi sebelum inset data ke database
router.post('/admin/users', verifyToken, validateUser, userController.createUser);

//definisikan route for user by id
router.get('/admin/users/:id', verifyToken, userController.findUserById);

//definisikan route for user update
router.put('/admin/users/:id', verifyToken, validateUser, userController.updateUser);

//definisikan route for user delete
router.delete('/admin/users/:id', verifyToken, userController.deleteUser);

module.exports = router //export router