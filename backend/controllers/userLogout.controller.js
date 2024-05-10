async function userLogout(req, res) {
    try {
        res.clearCookie("token");

        res.json({
            message: "User logout successfully",
            success: true,
            error: false,
            data: []
        })
    } catch (error) {
        res.json({
            message: error.message || error,
            success: false,
            error: true
        });
    }
}

export default userLogout;