import { Link } from "react-router-dom";

const SignUp = () => {
	return (
		<section className="h-screen p-2 mt-8 bg-zinc-50">
			<form
				action=""
				className="flex justify-center items-center bg-zinc-100 h-[80%] w-[90%] mx-auto mt-16 shadow-2xl ">
				<ul className="flex flex-col items-center gap-y-10 w-full p-4">
					<li className="flex flex-col">
						<label
							htmlFor="username"
							className="pl-1 font-semibold">
							Username<span className="text-red-500">*</span>
						</label>
						<input
							className="sm:w-96 p-3 rounded-md"
							id="username"
							type="text"
							placeholder="Enter your name"
						/>
					</li>
					<li className="flex flex-col">
						<label
							htmlFor="username"
							className="pl-1 font-semibold">
							Email<span className="text-red-500">*</span>
						</label>
						<input
							className="sm:w-96 p-3 rounded-md"
							type="email"
							placeholder="e.g. john.do@gmail.com"
						/>
					</li>
					<li className="flex flex-col">
						<label
							htmlFor="username"
							className="pl-1 font-semibold">
							Password<span className="text-red-500">*</span>
						</label>
						<input
							className="sm:w-96 p-3 rounded-md"
							type="password"
							placeholder="*******"
						/>
					</li>
					<li>
						<button className="font-semibold sm:w-96 p-3 rounded-md bg-blue-50 hover:bg-blue-400 duration-300">
							Log in
						</button>
					</li>
					<li>
						<h2>
							Do you have an account?{" "}
							<Link
								className="font-bold text-lg text-blue-400"
								to={"/signin"}>
								Log in
							</Link>{" "}
							now
						</h2>
					</li>
				</ul>
			</form>
		</section>
	);
};

export default SignUp;
