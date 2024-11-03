const user_feed = require('../Model/user_feed.cjs');
const HTTP_error = require('../util/error_handler.cjs');

async function profile (res,res,next) {
    const {username,feed_media} = req.body;
    const user = await user_feed.findOne({username:username});
    if(user){
        try {
            const feed = await user_feed.find.
            res.json(feed_media);
        }catch(err) {
            err = new HTTP_error('error in finding post of user')
            res.json(err);
        }
    }
}