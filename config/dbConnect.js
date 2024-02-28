import mongoose from "mongoose";


const dbConnect = async()=>{     
    try{
    const connected = await mongoose.connect(process.env.MongoDbConnection)
    console.log(`MongoDB Connected: ${connected.connection.host}`);
    }catch(error){
        console.log(`error: ${error.message}`);
        console.log(`retrying to connect`);
        await dbConnect();
        process.exit(1);
    }
};  

export default dbConnect;

//pwd
//BbJVJW8eH1QOgS5y 