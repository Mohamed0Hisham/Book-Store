/* eslint-disable react/prop-types */
import BookCard from "./BookCard.jsx";

const BookList = ({ data }) => {
	return (
		<div className="grid grid-cols-1 mt-6 gap-4">
			{data.map((book, index) => {
				return <BookCard book={book} key={index} />;
			})}
		</div>
	);
};

export default BookList;
