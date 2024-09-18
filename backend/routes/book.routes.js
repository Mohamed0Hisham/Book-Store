import express from "express";
const router = express.Router();
import {
	addBook,
	getAllBooks,
	getBook,
} from "../controllers/book.controllers.js";

router.post("/add", addBook);
router.get("/single/:id", getBook);
router.get("/all", getAllBooks);

export default router;
