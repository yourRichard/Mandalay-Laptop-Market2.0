import bcrypt from 'bcryptjs';
import User from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import cookie from 'cookie-parser';

async function userSigninController(req, res) {
    try {
        const { email, password } = req.body

        if (!email) {
            throw new Error("Please provide email")
        }
        if (!password) {
            throw new Error("Please provide password")
        }

        const user = await User.findOne({ email })

        if (!user) {
            throw new Error("User not found")
        }

        const checkPassword = await bcrypt.compare(password, user.password)

        console.log("checkPassoword", checkPassword)

        if(checkPassword){
            const tokenData = {
                _id: user.id,
                email: user.email
            }
            const token = await jwt.sign(tokenData, process.env.JSON_WEB_TOKEN_KEY, {expiresIn: 60 * 60 * 8});

            const tokenOption = {
                httpOnly: true,
                secure: true
            };

            res.cookie("token",token,tokenOption).json({
                message: "Login successfully",
                data: token,
                success: true,
                errror: false
            });
        }
        else{
            throw new Error("Please check your password")
        }

    } catch (error) {
        res.json({
            message: error.message || error,
            success: false,
            error: true
        });
    };
};

export default userSigninController;