const express = require('express');
toggle_router= express.Router();

toggle_router.router('/search').get(search)
toggle_router.router('/feed').get(feed)
toggle_router.router('/newpost').get(newpost)
toggle_router.router('/reels').get(reels)
toggle_router.router('/myprofile').get(myprofile)

exports.default = toggle_router;