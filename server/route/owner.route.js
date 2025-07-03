import express, { Router } from "express"
import { register_owner} from "../controler/owner.controller.js";

const ownerrouter = Router();

ownerrouter.route("/register_owner").post(register_owner);
// studentrouter.route("/verifycode").post(verifycode);
// studentrouter.route("/loginStudent").post(loginStudent);

export default ownerrouter;
