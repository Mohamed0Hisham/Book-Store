import express from "express";
import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
import { errorHandler } from "../middleware/errorHandler.js";

const router = express.Router();

router.post("/signin", async (req, res, next) => {
	console.log(req.body);

	const { username, email, password } = req.body;
	//checking all the required field
	if (!username || !email || !password) {
		throw new Error("all fields are required");
	}
	//checking if user exist
	const isValidEmail = await User.findOne({ email });
	if (!isValidEmail) {
		throw new Error("user already exist");
	}
	//check if password is valid
	const isValidPassword = validator.isLength(password, { min: 6 });
	if (!isValidPassword) {
		throw new Error("password should be 6 characters at least");
	}
	//encrypt the user password
	const hashedPassword = bcrypt.hashSync(password, 10);
	try {
		const newUser = await new User({
			username,
			email,
			password: hashedPassword,
		}).save();

		//exclude the password from the response
		//server respond after creating the user successfully
		return res
			.status(201)
			.json({ success: true, data: newUser, message: "user created" });
	} catch (error) {
		return next(errorHandler(400, error.message));
	}
});

export default router;
