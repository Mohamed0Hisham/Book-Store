import { useNavigate, useParams } from "react-router-dom";
import BookCard from "../components/BookCard";
import { useEffect, useState } from "react";
import test from "../assets/testAPI.js";
const Book = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [Book, setBook] = useState({});
	// useEffect(() => {
	// 	(async () => {
	// 		const res = await fetch(`http://localhost:8080/book/${id}`, {
	// 			method: "GET",
	// 		});
	// 		const { data } = await res.json();
	// 		setBook(data);
	// 	})();
	// }, [id]);
	useEffect(() => {
		const target = test.filter((book) => book._id === id);
		setBook(...target);
	}, [id]);
	return (
		<section className="h-screen bg-slate-100 flex flex-col items-center justify-center">
			<BookCard book={Book} />
			<button
				onClick={() => navigate(-1)}
				className="mt-4 p-4 font-bold text-gray-100 bg-blue-300 rounded-xl hover:bg-blue-400 hover:scale-95 duration-300">
				Go Back{" "}
			</button>
		</section>
	);
};

export default Book;
