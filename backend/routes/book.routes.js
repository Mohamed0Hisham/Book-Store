import express from "express";
const router = express.Router();
import { errorHandler } from "../middleware/errorHandler.js";
router.post("/add", async (req, res, next) => {
	console.log(req.body);
	res.status(200).json({
		success: true,
	});
});

export default router;
