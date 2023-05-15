import express from 'express';
import userModel from '../models/User.js';

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
    console.log("Get all users");
    res.send("Get all users");
});

userRouter.get("/:id", (req, res) => {
    const user = req.params.id;
    console.log(`Get user ${user}`);
    res.send(`Get user ${user}`);
});

userRouter.post("/create", async(req, res) => {
    console.log("Create user");
    res.send("Create user");
});

userRouter.put("/update/:id", (req, res) => {
    const user = req.params.id;
    console.log(`Update user ${user}`);
    res.send(`Update user ${user}`);
});

userRouter.delete("/:id", (req, res) => {
    const user = req.params.id;
    console.log(`Remove user ${user}`);
    res.send(`Remove user ${user}`);
});

export default userRouter;