const express = require('express');
const router = express.Router();
const {body} = require('express-validation');
const userController = require('../controllers/user.controller');

router.post('/register', [
  body('email').isEmail().withMessage('Email is not valid'),
  body('fullname.firstname').isLength({min:3}).withMessage('Firstname should be atleast 3 characters long'),  
  body('password').isLength({min:6}).withMessage('Password should be atleast 6 characters long')
], userController.registerUser);




module.exports = router;