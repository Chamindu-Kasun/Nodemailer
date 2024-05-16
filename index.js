const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
require("dotenv").config();

const email = process.env.EMAIL;
const email_password = process.env.EMAIL_PASS;
const receiver_email = process.env.RECEIVER_EMAIL;

const transporter = nodemailer.createTransport(smtpTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, 
  auth: {
    user: email,
    pass: email_password,
  },
}));


async function main() {
  const info = await transporter.sendMail({
    from: email, 
    to: receiver_email, 
    subject: "Hello ✔", 
    text: "Hello world?", 
    html: "<b>Hello world?</b>", 
  });

  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);