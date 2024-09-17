import express from "express";
const router = express.Router();
import { errorHandler } from "../middleware/errorHandler.js";
import Book from "../models/book.js";
router.post("/add", async (req, res, next) => {
	const { title, category, author, price ,description, image } = req.body;
	if (!title || !category || !author || !description || !image) {
		return next(errorHandler(404, "missing input data"));
	}
	const book = new Book({
		title,
		author,
		category,
		price,
		description,
		image,
	});
	try {
		const newBook = await book.save();
		return res.status(201).json({
			success: true,
			message: "book added to the database",
			data: newBook,
		});
	} catch (error) {
		return next(errorHandler(400, error.message));
	}
});

export default router;
