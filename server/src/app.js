import express from 'express';

import userRouter from './routes/users.js';
import productRouter from './routes/products.js';

const app = express();

app.use(express.json());

// Register User

app.post("/register", (req, res) => {

});

// Login User

app.post("/login", (req, res) => {

});

app.use("/users", userRouter, (req, res) => {

});

app.use("/products", productRouter, (req, res) => {

});

export default app;