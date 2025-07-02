import jwt from "jsonwebtoken"
import { Student } from "../module/student.module.js";

export const verifyToken = async (req, res, next) => {
  try {
    
    const authHeader = req.headers?.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

  
    const user = await Student.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(200).json({ message: "User not found" });
    }

    req.user = user; 
    next();

  } catch (error) {
    console.log("JWT Auth Error:", error);
    return res.status(401).json({ message: "Unauthorized: Invalid or expired token" });
  }
};
