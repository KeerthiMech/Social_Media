const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mailSender = require('../util/mailsender.cjs');

const otpSchema = new Schema (
    {
        email: {
            type: String,
            required: true,
          },
          otp: {
            type: String,
            required: true,
          },
          createdAt: {
            type: Date,
            default: Date.now,
            expires: 60 * 5,
          }
    }
);
async function sendVerificationEmail(email, otp) {
    try {
      const mailResponse = await mailSender(
        email,
        "Verification Email",
        `<h1>Please confirm your OTP</h1>
         <p>Here is your OTP code: ${otp}</p>`
      );
      console.log("Email sent successfully: ", mailResponse);
    } catch (error) {
      console.log("Error occurred while sending email: ", error);
      throw error;
    }
  }
  otpSchema.pre("save", async function (next) {
    console.log("New document saved to the database");
    // Only send an email when a new document is created
    if (this.isNew) {
      await sendVerificationEmail(this.email, this.otp);
    }
    next();
  });
module.exports = mongoose.model('Otp',otpSchema);
