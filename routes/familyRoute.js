import express from "express";
import{
    getFamilyCtrl,
    listFamiliesCtrl,
    registerFamilyContrl
}from "../controllers/familyController.js";

const familyRoutes = express.Router();

familyRoutes.post("/registerFamily", registerFamilyContrl);
familyRoutes.get("/:familyCode", getFamilyCtrl);
familyRoutes.get("/", listFamiliesCtrl);

export default familyRoutes;
