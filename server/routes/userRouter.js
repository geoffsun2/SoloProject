const express = require('express');
const userController = require('../controllers/userController')
const router = express.Router();

console.log('Hello Again')

router.get('/', userController.sayHi, (req, res) => {
    console.log("ONLINE");
    res.status(200).send('HELLO');
});


// router.post('/createUser', userController.createUser, (req, res) => {
//     console.log('MADE TO END')
//     res.status(200).send(res.locals)
// })