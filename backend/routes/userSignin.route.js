import express from 'express';
import userSigninController from '../controllers/userSignin.controller.js';

const router = express.Router();

router.post("/signin",userSigninController);

export default router;