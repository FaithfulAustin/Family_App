import mongoose from "mongoose";

const schema = mongoose.Schema;

const UserSchema = new schema({

    fullName:   {
        type:String,
        required:true
    }, 

    email:   {
        type:String,
        required:true,
        unique:true
    },  
    password:   {
        type:String,
        required:true
    }, 
    dob: {
        type:String,
        required:true
    },
    gender: {
        type:String,
        enum: ["Male","Female"],
        required:true
    },
    role:{
        type:String,
        enum: ["familyHead","familyMember"],
        required:true
    },
    familyCode: {
        type:String,
        required:true ,
        unique: false
       
    }

},

{
    timestamps:true
}
)

const User = mongoose.model("User",UserSchema);
export default User;