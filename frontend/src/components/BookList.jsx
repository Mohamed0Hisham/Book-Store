/* eslint-disable react/prop-types */
import BookCard from "./BookCard.jsx";

const BookList = ({ data }) => {
	return (
		<div className="grid grid-cols-[repeat(auto-fit,minmax(340px,auto))] mt-6 gap-4 px-1">
			{data.map((book, index) => {
				return <BookCard book={book} key={index} />;
			})}
		</div>
	);
};

export default BookList;
