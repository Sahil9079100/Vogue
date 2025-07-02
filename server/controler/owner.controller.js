import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Owner } from "../module/owner.module.js"
import { sendotp } from "../middleware/emailsend.js";

const register_owner = async (req, res) => {
    try {
        /*
name
email
phone
password
isverified
ownerPgs
location
verification code */

        const { name, email, phone, password } = req.body

        if (!name || !email || !phone || !password) {
            res.status(404).json({ status: 404, message: "all fields are required" })
        }
        const existing = await Owner.findOne({ $or: [{ email }, { phone }] });
        if (existing) {
            return res.status(200
            ).json({ msg: "Email or phone number already registered" });
        }

        const hashedPass = await bcrypt.hash(password, 10);
        const verifactioncode = Math.floor(10000 + Math.random() * 900000).toString();

        const owner = await Owner.create({
            name,
            email,
            phone,
            password: hashedPass,
            verifactioncode: verifactioncode
        })

        const sendotps = await sendotp(email, verifactioncode);

        return res.status(200).json({
            msg: "we sending otp on your mail id to verify your email",
            owner: {
                _id: owner._id,
            }, status: 200
        });

    } catch (error) {
        console.log("register owner error: ", error)
        res.status(500).json({ status: 500, message: "internal server error" })
    }
}

const verification_code_check = async (req,res) => {
    try {
        const {verifactioncode} = req.body
        if(!code)return res.status(404).json({ status: 404, message: "cpde not fpund" })

        const owner = await Owner.findOne({ verifactioncode });

        if(!owner){
            return res.status(404).json({status:404, message:"now found"})
        }
    } catch (error) {
        console.log("register owner error: ", error)
        res.status(500).json({ status: 500, message: "internal server error" })
    }
}

export { register_owner , verification_code_check}