const nodemailer = require('nodemailer');
const mailsender = async (req, res, next) => {
    try {
        // Create a Transporter to send emails
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for port 465, false for other ports
            auth: {
              user: "rhkeerthi1@gmail.com",
              pass: "Vasannon@375",
            },  
          });
        // Send emails to users
        let info = await transporter.sendMail({
          from: 'rhkeerthi1@gmail.com',
          to: email,
          subject: title,
          html: body,
        });
        console.log("Email info: ", info);
        return info;
      } catch (error) {
        console.log(error.message);
      }
    };
    module.exports = mailsender;
