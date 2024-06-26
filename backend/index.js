import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './configuration/database.js';
import userSignupRouter from './routes/userSignup.route.js';
import userSigninRouter from './routes/userSignin.route.js';
import userDetailRouter from './routes/userDetail.route.js';
import userLogoutRouter from './routes/userLogout.route.js';
import allUserRouter from './routes/allUsers.route.js';

dotenv.config();
const app = express();
app.use(express.json())

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));
app.use(cookieParser());
app.use("/api", userSignupRouter);
app.use("/api", userSigninRouter);
app.use("/api", userDetailRouter);
app.use("/api", userLogoutRouter);
app.use("/api", allUserRouter);

const PORT = process.env.PORT || 8081;

connectDB().then(() => {
    app.listen(PORT, (req, res) => {
        console.log(`server is running on Port: ${PORT}`);
    })

})


