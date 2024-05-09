import jwt from 'jsonwebtoken';

async function authToken( req, res, next ){
    try {
        const token = req.cookies?.token || req.header

        if(!token){
            return res.status(200).json({
                message: "User is not logged in",
                error: true,
                success: false
            })
        }

        jwt.verify(token, process.env.JSON_WEB_TOKEN_KEY,function(err,decoded){
            console.log(err);
            console.log(decoded);
            if(err){
                console.log("error auth:", err);
            };

            req.userId = decoded._id;
            next()
        })
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            data: [],
            error: true,
            success: false
        })
    }
}

export default authToken;