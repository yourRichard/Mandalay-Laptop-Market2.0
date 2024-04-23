import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './configuration/database.js';
import userSignupRouter from './routes/userSignup.route.js'; 


dotenv.config();
const app = express();
app.use(express.json())

app.use(cors());
app.use("/api",userSignupRouter);

const PORT = process.env.PORT || 8081;

connectDB().then(() => {
    app.listen(PORT, (req, res) => {
        console.log(`server is running on Port: ${PORT}`);
    })

})


