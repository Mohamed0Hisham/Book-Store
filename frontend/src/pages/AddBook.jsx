const AddBook = () => {
	return (
		<section className="h-screen">
			<form action="" className="mt-16 w-[95%] h-[95%] mx-auto">
				<ul className="w-full h-full flex items-center justify-center flex-col gap-y-10 rounded-lg shadow-md bg-gray-50">
					<h1 className="text-center font-bold font-serif text-2xl">
						Fill the following Book data
					</h1>
					<li className="flex flex-col">
						<label
							htmlFor="title"
							className="uppercase pl-1 font-mono">
							title<span className="text-red-500">*</span>
						</label>
						<input
							required
							type="text"
							name="title"
							id="title"
							className="sm:w-96 p-2 rounded-lg shadow-sm pl-4 "
							placeholder="Book title"
						/>
					</li>
					<li className="flex flex-col">
						<label
							htmlFor="category"
							className="uppercase pl-1 font-mono">
							category<span className="text-red-500">*</span>
						</label>
						<input
							className="sm:w-96 p-2 rounded-lg shadow-sm pl-4"
							required
							type="text"
							name="category"
							id="category"
							placeholder="Book category"
						/>
					</li>
					<li className="flex flex-col">
						<label
							htmlFor="author"
							className="uppercase pl-1 font-mono">
							author<span className="text-red-500">*</span>
						</label>
						<input
							className="sm:w-96 p-2 rounded-lg shadow-sm pl-4"
							required
							type="text"
							name="author"
							id="author"
							placeholder="Book author"
						/>
					</li>
					<li className="flex flex-col">
						<label
							htmlFor="description"
							className="uppercase pl-1 font-mono">
							description<span className="text-red-500">*</span>
						</label>
						<input
							className="sm:w-96 p-2 rounded-lg shadow-sm pl-4"
							required
							type="text"
							name="description"
							id="description"
							placeholder="Book description"
						/>
					</li>
					<li className="flex flex-col">
						<label
							htmlFor="image"
							className="uppercase pl-1 font-mono">
							image
						</label>
						<input
							className="sm:w-96 p-2 rounded-lg shadow-sm pl-4"
							type="file"
							accept="image/*"
							name="image"
							id="image"
						/>
					</li>
					<li>
						<button
							className="p-4 font-light bg-gray-200 rounded-xl hover:bg-gray-300 hover:scale-95 duration-300"
							type="submit">
							Add Book
						</button>
					</li>
				</ul>
			</form>
		</section>
	);
};

export default AddBook;
