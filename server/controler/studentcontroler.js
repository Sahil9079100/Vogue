import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendotp } from "../middleware/emailsend.js";
import { Student } from "../module/student.module.js";
import { PG } from "../module/pg.module.js";


export const registerStudent = async (req, res) => {
  try {
    const { name, email, phoneno, password, gender } = req.body;

  
    if(!name || !email || !phoneno || !gender){
        return res.status(200).json({message : "all field are require "});
    }

    const existing = await Student.findOne({$or : [{email} , {phoneno}]});
    if (existing) {
      return res.status(200
      ).json({ msg: "Email or phone number already registered" });
    }

    

    const hashedPass = await bcrypt.hash(password, 10);

  const verifactioncode = Math.floor(10000 + Math.random()*900000).toString();









    const newStudent = await Student.create({
      name,
      email,
      phoneno,
      password: hashedPass,
      gender,
      verifactioncode
    });


const sendotps = await sendotp(email , verifactioncode);


    res.status(200).json({
      msg: "we sending otp on your mail id to verify your email",
      student: {
        _id: newStudent._id,
        name: newStudent.name,
        email: newStudent.email,
        phoneno: newStudent.phoneno,
        gender: newStudent.gender
      },status : 2000
    });

  } catch (err) {
    res.status(500).json({ message : "error on register route " , err});
  }
};


export const verifycode = async (req, res) => {

    try {
       
        const { code } = req.body;
        if (!code) {
            return res.status(200).json({ message: "otp is required" });
        }

        const finduser = await Student.findOne({ verifactioncode: code }).select("-password");
        if (!finduser) {
            return res.status(200).json({ message: "otp is not valid" });
        }

        finduser.isVerified = true;
        finduser.verifactioncode = undefined;
        await finduser.save();

        const token = jwt.sign(
            { id: finduser._id },
            process.env.JWT_SECRET,
            { expiresIn: '9d' }
        );

        if (!token) {
            return res.status(200).json({ message: "token was not created" });
        }

        return res.status(200).json({
            message: "user verified successfully",
            token,
            user: finduser,
            status : 3000
        });

    } catch (error) {
        console.log("error on check otp in server ::>", error);
        res.status(500).json({ message: "error on check otp in server " });
    }

}

export const loginStudent = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(200).json({ message: "All fields are required" });
    }

    const finduser = await Student.findOne({ email });

    if (!finduser) {
      return res.status(200).json({ message: "Email or password is incorrect" });
    }

   
    const validPassword = await bcrypt.compare(password, finduser.password);
    if (!validPassword) {
      return res.status(200).json({ message: "Email or password is incorrect" });
    }


    if (!finduser.isVerified) {
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      finduser.verifactioncode = otp;
      await finduser.save();

      const sendotps = await sendotp(email, otp);

      return res.status(200).json({
        message: "You are not verified yet. OTP sent to your email.",
        sendotps,
        status: 2000
      });
    }

   
    const token = jwt.sign({ id: finduser._id }, process.env.JWT_SECRET, {
      expiresIn: "9d"
    });

    if (!token) {
      return res.status(200).json({ message: "Error generating token" });
    }

    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        _id: finduser._id,
        name: finduser.name,
        email: finduser.email,
        phoneno: finduser.phoneno,
        gender: finduser.gender
      },
      status : 2001
    });

  } catch (error) {
    console.log("Error in student login:", error);
    return res.status(500).json({ message: "Server error during login" });
  }
};







export const getroomsnearby = async (req, res) => {
  try {
    
    let { lat, lng } = req.params; 

    
    if (!lat || !lng) {
      const studentId = req.user?._id;

      if (!studentId) {
        return res.status(401).json({ message: "Unauthorized student" });
      }

      const student = await Student.findById(studentId).select("location");

      if (!student || !student.location || !student.location.coordinates) {
        return res.status(400).json({ message: "Student location not found" });
      }

      lat = student.location.coordinates[1];
      lng = student.location.coordinates[0];
    }

    const nearbyPGs = await PG.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [parseFloat(lng), parseFloat(lat)]
          },
          $maxDistance: 10000 
        }
      }
    });


    if (!nearbyPGs || nearbyPGs.length === 0) {
      return res.status(200).json({ message: "No PGs found near this location." });
    }

    return res.status(200).json({
      message: "Rooms near your location",
      rooms: nearbyPGs
    });

  } catch (error) {
    console.log("Error on finding rooms near your location:", error);
    return res.status(500).json({ message: "Server error while fetching nearby rooms." });
  }
};




