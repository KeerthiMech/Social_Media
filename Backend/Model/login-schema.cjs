const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Authorization = new Schema ({
    mailid : {type : String,require : true},
    name : {type : String , require : true },
    username : {type :String , require : true},
    password : {type : String , require : true },
    phonenumber : {type : Number, require : false},
    profile_pic : {type : String , require : false}
});

module.exports = mongoose.model("authorization",Authorization);