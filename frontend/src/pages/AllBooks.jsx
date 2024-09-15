import BookList from "../components/BookList";
import test from "../assets/testAPI.js";
const AllBooks = () => {
	return (
		<section className="p-2 mt-8">
			<div className="flex justify-evenly items-center">
				<div className="my-6 px-8 py-2 bg-green-100 w-full">
					<h1 className="text-center font-bold text-lg">
						Choose a Categorie
					</h1>
					<select
						name=""
						id=""
						className="w-full p-2 rounded-lg shadow-md appearance-none">
						<option value="all">All Categories </option>
						<option value="litreature">Litreature </option>
						<option value="mystery">Mystery</option>
						<option value="romance">Romance</option>
						<option value="lifeSlice">Life Slice</option>
						<option value="fiction">Fiction</option>
						<option value="selfDevelopment">
							Self Development
						</option>
					</select>
				</div>
				<div className="w-full my-6 px-8 py-2 bg-slate-100">
					<h1 className="text-center font-bold text-lg">
						Search for a specific book
					</h1>
					<input
						type="search"
						name=""
						id=""
						placeholder="Enter a book name"
						className="px-8 py-2 shadow-2xl w-full rounded-lg"
					/>
				</div>
			</div>
			<BookList data={test} />
		</section>
	);
};

export default AllBooks;
