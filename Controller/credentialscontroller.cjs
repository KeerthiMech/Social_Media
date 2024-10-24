const otpGenerator =require('otp-generator');

const login_schema = require('../Model/login-schema.cjs');
const OTP =require('../Model/otp_schema.cjs');


const logincontroller = async(req, res, next) => {
    const {username, mailid, password} = req.body;
    try {
        existing_login = await login_schema.findOne({username :username} || {mailid : mailid})
    }
    catch(err) {
        console.log(err);
    }
    if(!existing_login || password !== password) {
        res.status(401).json({message: "Invalid Credentials"});
    }
    res.json(username,mailid);
}
const signincontroller = async (req, res, next) => {
    res.json({"result" : "signin is working"});
      console.log("signin checker log");
       const {username, mailid, password, phonenumber, profile_pic, name} = req.body;
    let existingcheck
    try {
        existingcheck = await login_schema.findOne({username : username} || {mailid : mailid})
    }catch(err) {
        console.log("user already exists error enountered");
        return next(err);
    }
    if(existingcheck){
        res.status(400).json({message: "User already exists"});
        return next(err);
    }
    const createuser = new login_schema({
        username,
        mailid,
        password,
        name,
        phonenumber,
        profile_pic
    });
    try {
       await createuser.save();
    }catch(err) {
        console.log("error encountered while saving to database");
        return next(err);
    }
    res.status(201).json({user: createuser.toObject({ getters: true })});  

}
const sendOTP = async (req, res) => {
    try {
      const { email } = req.body;
      // Check if user is already present
      const checkUserPresent = await User.findOne({ email });
      // If user found with provided email
      if (checkUserPresent) {
        let otp = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false,
          });
          let result = await OTP.findOne({ otp: otp });
          while (result) {
            otp = otpGenerator.generate(6, {
              upperCaseAlphabets: false,
            });
            result = await OTP.findOne({ otp: otp });
          }
          const otpPayload = { email, otp };
          const otpBody = await OTP.create(otpPayload);
          res.status(200).json({
            success: true,
            message: 'OTP sent successfully',
            otp,
          });
          res.json(otpBody);
      }
      
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ success: false, error: error.message });
    }
  };

exports.signin = signincontroller;
exports.login = logincontroller;
exports.otp = sendOTP;