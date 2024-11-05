const express = require('express');
toggle_router= express.Router();

const {search,newpost,reels,myprofile} = require('../Controller/feedcontroller.cjs');

toggle_router.route('/search').get(search)
toggle_router.route('/feed').get(search)
toggle_router.route('/newpost').post(newpost)
toggle_router.route('/reels').get(reels)
toggle_router.route('/myprofile').get(myprofile)

module.exports = toggle_router;