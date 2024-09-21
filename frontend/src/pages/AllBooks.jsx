import BookList from "../components/BookList";
import { useEffect, useState } from "react";
const AllBooks = () => {
	const [books, setBooks] = useState([]);
	const [selectdOption, setSelectedOption] = useState("");
	const [searchData, setSearchData] = useState(null);

	useEffect(() => {
		(async () => {
			try {
				const allBooksRes = await fetch(
					"http://localhost:8080/book/all",
					{
						method: "GET",
					}
				);
				if (allBooksRes.ok) {
					const { data } = await allBooksRes.json();
					setBooks(data);
				}
			} catch (error) {
				console.log(error.message);
			}
		})();
	}, []);
	const handleFilter = async (e) => {
		const params = {
			category: e.target.value,
		};
		const queryString = new URLSearchParams(params).toString();
		const fetchFiltredBooks = await fetch(
			`http://localhost:8080/book/filter?${queryString}`,
			{
				method: "GET",
			}
		);
		if (fetchFiltredBooks.ok) {
			const { data } = await fetchFiltredBooks.json();
			setBooks(data);
		}
	};
	const handleSearchBar = (e) => {
		const searchResult = books.filter(
			(book) => book && book.title.toLowerCase().includes(e.target.value)
		);
		setSearchData(searchResult);
	};
	return (
		<section className="p-2 mt-8">
			<div className="flex justify-evenly items-center">
				<div className="my-6 px-8 py-2 bg-green-100 w-full">
					<h1 className="text-center font-bold text-lg">
						Choose a Categorie
					</h1>
					<select
						value={selectdOption}
						onChange={(e) => setSelectedOption(e.target.value)}
						onInput={handleFilter}
						name="category"
						id="category"
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
						onChange={handleSearchBar}
						type="search"
						name=""
						id=""
						placeholder="Enter a book name"
						className="px-8 py-2 shadow-2xl w-full rounded-lg"
					/>
				</div>
			</div>
			<BookList data={searchData || books} />
		</section>
	);
};

export default AllBooks;
