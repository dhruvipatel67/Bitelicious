import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config({ path: "./env" });

const MONGODB_URL = "mongodb+srv://Lavvadnagara:LavBlue271@lav.hhnkzxi.mongodb.net"

// const PORT = 5015

// const MongoDBURL = "mongodb+srv://Lavvadnagara:LavBlue271@lav.hhnkzxi.mongodb.net";

import { DB_NAME } from "../utils/constant.js";

const connectDB = async () => {
    try {
        const connectInstance = await mongoose.connect(`${MONGODB_URL}/${DB_NAME}`)

        console.log(`\nMongoDB connected!! DB HOST: ${connectInstance.connection.host}`)

    } catch (error) {
        console.log("MongoDB Connection ERROR: \n",error);
        process.exit(1)
    }
}

export default connectDB
