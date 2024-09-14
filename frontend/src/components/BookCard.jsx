/* eslint-disable react/prop-types */

import { BsCartPlus } from "react-icons/bs";
const BookCard = ({ book }) => {
	return (
		<div className="flex flex-col items-center shadow-lg px-1 py-2 bg-slate-100 rounded-sm">
			<img
				src={book.imageURL}
				alt={book.bookTitle}
				className="object-contain size-64"
			/>
			<div className=" flex w-full justify-between text-md font-bold font-mono">
				<h1>{book.bookTitle}</h1>
				<p>{book.authorName}</p>
			</div>
			<div className="text-md p-3 ">
				<p>{book.bookDescription}</p>
				<div className="flex items-center justify-around p-1 rounded-lg shadow-md">
					<span className="text-lg font-extrabold">price: ${50}</span>
					<button className="bg-blue-300 hover:bg-blue-600 p-2 rounded-full">
						<BsCartPlus size={26} color="white" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default BookCard;
