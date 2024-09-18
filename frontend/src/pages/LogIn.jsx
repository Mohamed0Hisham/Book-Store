import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../App.jsx";

const LogIn = () => {
	const {setUser} = useContext(userContext)
	const [formData, setFormData] = useState({});
	const handleInput = (e) => {
		setFormData({ ...formData, [e.target.id]: e.target.value });
	};

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await fetch(
				"http://localhost:8080/authentication/signin",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(formData),
				}
			);
			if (res.ok) {
				const { data } = await res.json();
				console.log(data);
				setUser(data)
				navigate(`/`);
			}
		} catch (error) {
			console.log(error.message);
		}
	};

	
	return (
		<section className="h-screen p-2 mt-8 bg-zinc-50">
			<form
				onSubmit={handleSubmit}
				className="flex justify-center items-center bg-zinc-100 h-[80%] w-[90%] mx-auto mt-16 shadow-2xl ">
				<ul className="flex flex-col items-center gap-y-10 w-full p-4">
					<li className="flex flex-col">
						<label
							htmlFor="username"
							className="pl-1 font-semibold">
							Email<span className="text-red-500">*</span>
						</label>
						<input
							onChange={handleInput}
							className="sm:w-96 p-3 rounded-md"
							type="email"
							placeholder="e.g. john.do@gmail.com"
							id="email"
						/>
					</li>
					<li className="flex flex-col">
						<label
							htmlFor="username"
							className="pl-1 font-semibold">
							Password<span className="text-red-500">*</span>
						</label>
						<input
							onChange={handleInput}
							className="sm:w-96 p-3 rounded-md"
							type="password"
							placeholder="*******"
							id="password"
						/>
					</li>
					<li>
						<button
							type="submit"
							className="font-semibold sm:w-96 p-3 rounded-md bg-blue-50 hover:bg-blue-400 duration-300">
							Log in
						</button>
					</li>
					<li>
						<h2>
							Do not you have an account?{" "}
							<Link
								className="font-bold text-lg text-blue-400"
								to={"/signup"}>
								Sign up
							</Link>{" "}
							now
						</h2>
					</li>
				</ul>
			</form>
		</section>
	);
};

export default LogIn;
