import mongoose from "mongoose";

async function connectDB(){
    try {
        mongoose.connect(process.env.MONGODB_URL);
        console.log("Database is connected sucessfully");

    } catch (error) {
        console.log(error);
    }
}

export default connectDB;