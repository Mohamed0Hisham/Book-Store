import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/user.routes.js";
// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(express.json());



app.use("/user", userRoutes);

//Error handler route
app.use((err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	const message = err.message || "Internal Server Error";
	return res.status(statusCode).json({
		success: false,
		statusCode,
		message,
	});
});

mongoose
	.connect(process.env.DB_URL, {
		dbName: process.env.NAME,
	})
	.then(() => {
		app.listen(process.env.PORT || 3000, () => {
			console.log(`server is running at port: ${process.env.PORT}`);
		});
	});
