import mongoose from "mongoose";

 const connectDB = async ()=>{
   try{
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Database connected successfully  ${connection.connection.host}`);
   }
   catch(err){
       console.log(err.message );
   }
   
}

export default connectDB;