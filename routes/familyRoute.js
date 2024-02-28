import express from "express";
import{
    registerFamilyContrl
}from "../controllers/familyController.js";

const familyRoutes = express.Router();

familyRoutes.post("/registerFamily", registerFamilyContrl);

export default familyRoutes;
