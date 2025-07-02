import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, 
  auth: {
    user: "puri69132@gmail.com",
    pass: "uvuo kdem daim nvco",
  },
});




