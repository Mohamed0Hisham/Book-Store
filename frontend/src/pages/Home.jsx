import BookList from "../components/BookList";
import Categories from "../components/Categories";
import Landing from "../components/Landing";
import { useEffect, useState } from "react";
const Home = () => {
	const [data, setData] = useState([]);

	//fetch books
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
					setData(data);
				}
			} catch (error) {
				console.log(error.message);
			}
		})();
	}, []);
	return (
		<section className="min-h-screen">
			<Landing />
			<Categories />
			<section>
				<h1 className="text-center p-6 text-3xl font-bold text-white bg-[#001524]">
					Best <span className=" text-red-500">Sellers</span>
				</h1>
				<BookList data={data} />
			</section>
		</section>
	);
};

export default Home;
