const express = require('express');

const {logincontroller , signincontroller , sendOTP} = require('../Controller/credentialscontroller.cjs');
const cred_route = express.Router();

cred_route.route('/login').get(logincontroller)
cred_route.route('/signin').post(signincontroller)
cred_route.route('/sendotp').get(sendOTP)


module.exports = cred_route;