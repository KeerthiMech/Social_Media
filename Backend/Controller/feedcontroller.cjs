const user_feed = require('../Model/user_feed.cjs');
const HTTP_error = require('../util/error_handler.cjs');

async function myprofile (req,res,next) {
    const {username} = req.body;
    const user = await user_feed.findOne({username:username});
    let feed;
    if(user){
        try {
            feed = await user_feed.find({username});
        }catch(err) {
            err = new HTTP_error('error in finding post of user');
            res.json(err);
        }
        res.json({feed : feed.map(feeder=> feeder.toObject({getters :true}))})
    };
};
async function newpost (req,res,next) {
    const {username} = req.body;
    const user = await user_feed.find(username).populate('feed');
    if(user === true) {
        let {userid ,music,profile_pic,feed_media } = req.body;
        const userchecker = user_feed.findOne({username : username});
        let createdplace = new user_feed(
            userid,
            music,
            profile_pic,
            feed_media
        );
        if(!userchecker) {
            throw new HTTP_error('user does not exists');
        }
        if(userchecker) {
            try {
                const sess = await mongoose.startSession();
                sess.startTransaction();
                await createdplace.save({ session: sess }); 
                user.places.push(createdplace); 
                await user.save({ session: sess }); 
                await sess.commitTransaction();
            }catch(err) {
                err = new HTTP_error('error in saving post onto the database');
                res.json(err);
            }
            res.status(201).json({result : place_creation_success});

        }
    }
    

};
async function search (req,res,next) {
    const {username} = req.body;
    const user = await user_feed.findOne({username:username});
    let feed;
    if(user){
        try {
            feed = await user_feed.find({}).populate('feed');
        }catch(err) { 
            err = new HTTP_error('error in finding post of user');
            res.json(err);
        }
        res.json({feed : feed.map(feeder=> feeder.toObject({getters :true}))})
    };
};
async function reels (req,res,next) {
    const {username} = req.body;
    const user = await user_feed.findOne({username:username});
    let reels;
    if(user){
        try {
            reels = user_feed.find({mediatype : video}).populate('feed');
        }catch(err) { 
            err = new HTTP_error('error in finding post of user');
            res.json(err);
        }
        res.json({feed : feed.map(feeder=> feeder.toObject({getters :true}))})
    };
        
};
module.exports = {search,myprofile,newpost,reels};