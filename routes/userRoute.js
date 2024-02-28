import express from "express";
import{
    registerUserContrl
}from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.post("/register", registerUserContrl);

export default userRoutes;