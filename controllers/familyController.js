
import asyncHandler from "express-async-handler";
import Family from "../models/Family.js";



export const registerFamilyContrl = asyncHandler(async (req, res) => {

    const { familyName, familyHead, doc, country,familyCode} = req.body;



   //check if familyCode already exists
   const isFamilyCodeExists = await Family.findOne({ familyCode });   
   console.log("HER "+ isFamilyCodeExists);
   if (isFamilyCodeExists) {
     //handling error
 
     return res.status(409).json({ message: "Family Code already in use" });
   }

   //generate family code
   let lower = familyName.toLowerCase();
   let genFamilyCode = lower+country+doc+"";
   
     //create family object
  const family = await Family.create({
    familyName,
    familyHead,
    doc,
    country,
    familyCode : genFamilyCode,
  });
  


  res.status(201).json({
    status: "success",
    message: "Family registered successfully",
    data: family,
  });
});

//get all Families 

export const listFamiliesCtrl = asyncHandler(async (req, res) => {
  const family = await Family.find();
  res.status(200).json({
    status: "success",
    family,
  });
});