import mongoose from "mongoose";

const schema = mongoose.Schema;

const FamilySchema = new schema({

    familyName:   {
        type:String,
        required:true
    }, 

    familyHead:   {
        type:String,
        required:true
    },  
    doc: {
        type:String,
        required:true
    },
    country: {
        type:String,
        required:true
    },
    familyMembers: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Member",
        },
      ],
    familyCode: {
        type:String,
        required:true,
        unique:true
    }

},

{
    timestamps:true
}
)

const Family = mongoose.model("Family",FamilySchema);
export default Family;