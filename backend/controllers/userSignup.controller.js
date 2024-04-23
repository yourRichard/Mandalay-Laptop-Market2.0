import bcrypt from 'bcryptjs';
import User from "../models/userModel.js";

async function userSignupController( req, res ){
    try {
        const { email, password, name } = req.body;

        const user = await User.findOne({email});

        if(user){
            throw new Error("User is already exist, try again")
        }

        if (!email || !password || !name){
            throw new Error(" Please provide all the field ");
        };

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);

        const userData = User({
            email,
            password: hashPassword,
            name
        })
        const saveUser = userData.save();
        res.status(201).json({
            data: saveUser,
            success: true,
            error: false,
            message: "User created successfully."
        })


    } catch (error) {
        res.json({
            message: error.message || error,
            success: false,
            error  : true
        })
    }
};

export default userSignupController;