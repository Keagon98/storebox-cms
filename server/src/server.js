import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import userRouter from './routes/users.js';
import productRouter from './routes/products.js'

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const uri = process.env.MONGO_DB_CONNECTION;

async function connect() {
    try {
        console.log("Connecting to mongodb...");
        mongoose.connect(uri);
    } catch (error) {
        console.error(error)
    }
}

connect();

app.use("/users", userRouter, (req, res) => {
    res.send("Users");
    console.log("Users");
});

app.use("/products", productRouter, (req, res) => {
    res.send("Products");
    console.log("Products");
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});