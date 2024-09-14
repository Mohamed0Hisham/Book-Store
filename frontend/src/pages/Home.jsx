import BookList from "../components/BookList";
import Categories from "../components/Categories";
import Landing from "../components/Landing";
import test from "../assets/testAPI.js";
import { useEffect, useState } from "react";
const Home = () => {
	const [data, setData] = useState([]);

	//fetch books
	useEffect(() => {
		setData(test);
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
