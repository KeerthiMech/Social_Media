const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        userid : {
            type :String,
            required : true
        },
        username : {
            type : String,
            required : true,
        },
        music : {
            type : String,
            required : true,
        },
        profile_pic : {
            type : String,
            required : false,
        },
        feed_media : {
            type : String,
            required : true
        },
        likes : {
            type : Number,
            required : true
        },
        comments : {
            type : Number,
            required : true
        }, 
        shares : {
            type : Number,
            required : true
        },
        description : {
            type: String,
            required : false
        }

    }
);
module.exports = mongoose.model('feed',postSchema);