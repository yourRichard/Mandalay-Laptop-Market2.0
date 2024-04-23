import mongoose from "mongoose";

const userScheme = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        min: 5,
        required: true
    },
}, { timestamps: true },
);

const User = mongoose.model("User", userScheme);

export default User;