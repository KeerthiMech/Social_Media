const express = require('express');

const cred = require('../Controller/credentialscontroller.cjs');

const credentials_route = express.Router();
credentials_route.get('/login',cred.login);
credentials_route.post('/signin',cred.signin);
credentials_route.post('/otp-sender',cred.otp);

module.exports = credentials_route;