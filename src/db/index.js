import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
import express from "express";
const app = express()

const connectDB = async () => {
    try {
        const conection_string = "mongodb+srv://sakshamvedi:saksham123@cluster0.zuusmct.mongodb.net";
        const connectInstance = await mongoose.connect(`${conection_string}/${DB_NAME}`);
        console.log(`Connected to ${connectInstance.connection.host} database`);



    } catch (error) {
        console.log("Error connecting to database");
    }

}

export default connectDB;   