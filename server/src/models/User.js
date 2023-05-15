import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
},
{ collection: "user" });

userSchema.index({ user_id: 1 }, { unique: true });

const userModel = mongoose.model("User", userSchema);

export default userModel;