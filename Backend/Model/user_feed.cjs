const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        username : {
            type : String,
            required : true,
        },
        music : {
            type : Enumerator,
            required : true,
        },
        profile_pic : {
            type : Image,
            required : false,
        },
        feed_media : {
            type : Image || VideoColorSpace,
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