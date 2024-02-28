import express from "express";
import{
    listFamiliesCtrl,
    registerFamilyContrl
}from "../controllers/familyController.js";

const familyRoutes = express.Router();

familyRoutes.post("/registerFamily", registerFamilyContrl);
familyRoutes.get("/", listFamiliesCtrl);

export default familyRoutes;
