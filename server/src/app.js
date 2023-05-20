import express from 'express';
import bcryptjs from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';

import userRouter from './routes/users.js';
import productRouter from './routes/products.js';
import userModel from './models/User.js';

const app = express();
const jwt = jsonwebtoken;
dotenv.config();

app.use(express.json());

// Register User

app.post("/register", async (req, res) => {
    try {

        // Validate that all required fields are filled in by the user
        // 1. Get the required fields from the request body
        // 2. Check, if (both fields) are not filled in, then respond with a status code (400) and a message telling the user that the fields are required


        // Check if user exists
        // 1. Search the document for a username that matches the one being sent in the request body, then store that value in a variable
        // 2. Check, if (username does exist) then respond with a status code (409) and a message telling the user that the user they are creating already exists

        
        const { username, password } = req.body;

        if (!(username && password)) {
            res.status(400).send({ message: "Username and Password is required" });
        } 

        const existingUser = await userModel.findOne({ username });

        if (existingUser) {
            return res.status(409).send({ message: "User already exists" });
        } 

        // TODO's
        // Password Encryption
        // Setup JWT
        // A couple more things I'll have to look up 😅

        const encryptedPassword = bcryptjs.hashSync(password, 12);

        const user = new userModel({
            username: username,
            password: encryptedPassword
        });

        const token = jwt.sign(
            { 
                user_id: user._id, 
                username: user.username
            },
            process.env.ACCESS_TOKEN_KEY,
            {
              expiresIn: "5h",
            }
        );

        user.token = token;

        await user.save();

        res.status(201).send(user);
    } catch (error) {
        console.error(error);
    }    
});

// Login User

app.post("/login", (req, res) => {

});

app.use("/users", userRouter, (req, res) => {

});

app.use("/products", productRouter, (req, res) => {

});

export default app;