import User from "../models/userModel.js";

async function allUsers( req,res ){
    try {
        console.log("user-id....: ",req.userId );
        const allUsers = await User.find()

        res.json({
            message: "All users",
            data: allUsers,
            error: false,
            success: true
        })
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

export default allUsers;