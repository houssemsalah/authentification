const Mongoose=require("mongoose");
const connectDB=async()=>{
    try {
      await  Mongoose.connect(process.env.DB_URI)
      console.log("Database is connected")
    } catch (error) {
        console.log("Database is not connected")
    }
};
module.exports= connectDB;