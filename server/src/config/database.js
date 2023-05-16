import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { MONGO_DB_CONNECTION, MONGO_DB_NAME } = process.env;
const options = {
    autoIndex: false,
    dbName: MONGO_DB_NAME
}

function mongoDbConnect() {
    try {
        mongoose.connect(MONGO_DB_CONNECTION, options);
        console.log("Successfully connected to database...");
    } catch (error) {
        console.error("Error connecting to database...", error);
    }
}

export default mongoDbConnect;