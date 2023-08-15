const models = require('../models/userModel');

const userController = {};

const mongoose = require('mongoose');

userController.sayHi = (req, res, next) => {
    console.log('Heyyy');
    next();
}

userController.createUser = async (req, res, next) => {
    try {
        console.log('made to controller')
        const data = await models.User.create(req.body);
        console.log(data);
        next();
    }
    catch(error) {
        return next({
                log: `userController.createUser ERROR : ${error}`,
                status : 400,
                message : {
                  error : 'userController.createUser ERROR wrong input'
                }    
        })
    }
}

module.exports = userController;