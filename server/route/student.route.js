import express, { Router } from "express"
import { loginStudent, registerStudent, verifycode } from "../controler/studentcontroler.js";

const studentrouter = Router();

studentrouter.route("/registerStudent").post(registerStudent);
studentrouter.route("/verifycode").post(verifycode);
studentrouter.route("/loginStudent").post(loginStudent);

export default studentrouter;
