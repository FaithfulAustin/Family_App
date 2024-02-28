import express from "express";
import{
    listUsersCtrl,
    registerUserContrl
}from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.post("/register", registerUserContrl);
userRoutes.get("/", listUsersCtrl);
export default userRoutes;