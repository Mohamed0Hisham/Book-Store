/* eslint-disable react/prop-types */

import { BsCartPlus } from "react-icons/bs";
const BookCard = ({ book }) => {
	return (
		<div className="flex flex-col items-center justify-between shadow-lg px-1 py-2 bg-slate-100 w-fit h-90 rounded-lg">
			<img
				src={book.imageURL}
				alt={book.bookTitle}
				className="object-contain w-96 h-96"
			/>
			<div className="size-8 flex w-full justify-between md:justify-around text-md font-bold font-mono p-1 rounded-lg shadow-md m-2">
				<h1>{book.bookTitle}</h1>
				<span>By</span>
				<p>{book.authorName}</p>
			</div>
			<div className="text-md p-3 w-full">
				<p className="overflow-clip h-72 ">{book.bookDescription}</p>
				<div className="h-14 flex items-center justify-around p-1 rounded-lg shadow-md">
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
