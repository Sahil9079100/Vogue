import { transporter } from "./emailsetup.js";

 export const sendotp = async ( email , verifactioncode )=>{
try {
    
        const info = await transporter.sendMail({
        from: '"verifaction code from RentEasy " <puri69132@gmail.com>',
        to: email ,
        subject: "email otp verifaction code",
        text: "this is your code to verify email", // plain‑text body
        html: `here is your code : ${verifactioncode}`, // HTML body
         })
    
         console.log("Message sent:", info.messageId);
    
} catch (error) {
    console.log("error on sending email in emailsend.js file ::> " , error)
}
};
