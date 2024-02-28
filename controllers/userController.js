import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import generateToken from "../util/generateToken.js";
import obtainTokenFromHeaders from "../util/obtainTokenFromHeader.js";
import verifyToken from "../util/verifyToken.js";
import Family from "../models/Family.js";
import User from "../models/User.js";




export const registerUserContrl = asyncHandler(async (req, res) => {
  let getName = "";
  const { fullName, email, password , dob, gender,role,familyCode} = req.body;

// console.log(email)

  //check if user already exists
const isUserExists = await User.findOne({ email });
// console.log(isUserExists);
  if (isUserExists) {
    //handling error

    return res.status(409).json({ message: "Email already in use" });
  }


  //  check if familycode already exists

   const isFamilyCodeExists = await Family.findOne({familyCode});

   console.log(familyCode);
   console.log({isFamilyCodeExists});

   if (!isFamilyCodeExists) {
     //handling error
 
     return res.status(409).json({ message: "Family Code does not exist" });
   }



   //get name of family head

   if(role === "familyHead"){
    const family = await Family.findOne({ familyCode });
    console.log("ff "+family);
    getName = family.familyHead;
   }else{
    getName = fullName;
   }


   //hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // creating user
      const user = await User.create({
        fullName: getName,
        email,
        password: hashedPassword,
        dob,
        gender,
        role,
        familyCode
      });
      


  res.status(201).json({
    status: "success",
    message: "User registered successfully",
    data: user,
  });
});

//get all Users 

export const listUsersCtrl = asyncHandler(async (req, res) => {
  const user = await User.find();
  res.status(200).json({
    status: "success",
    user,
  });
});