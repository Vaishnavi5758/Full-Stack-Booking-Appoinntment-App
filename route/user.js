const path = require('path');

const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

router.get('/', userController.indexPage);

router.post('/login', userController.postUserLoginData);

router.get('/showallusers', userController.showallusers);

//router.get('/loadUsers', userController.loadUsers);

router.get('/list', userController.list);

router.delete('/deleteUser/:id', userController.deleteUser);


module.exports = router;
