import { useRef, useState } from "react";
import { CLOUD_NAME, UPLOAD_PRESET } from "../config.js";
import { BsCloudUpload } from "react-icons/bs";
const AddBook = () => {
	const [formData, setFormData] = useState({});
	const [image, setImage] = useState("");
	const [displayName, setDisplay_name] = useState("");
	const [loading, setLoading] = useState(false);
	const imageRef = useRef();
	const handleInput = (e) => {
		setFormData({ ...formData, [e.target.id]: e.target.value });
	};

	const handleImageUpload = async (e) => {
		setLoading(true);
		const imageFile = new FormData();
		imageFile.append("upload_preset", UPLOAD_PRESET);
		imageFile.append("asset_folder", "Book Store");
		imageFile.append("resource_type", "image");

		/**
		 * we need signed preset to be able to apply transofrmation before upload
		 */
		// Add transformations as a JSON string or comma-separated values
		// imageFile.append(
		// 	"transformation",
		// 	"c_fit,w_320,h_480,g_auto,q_auto:good,f_auto"
		// );

		imageFile.append("file", e.target.files[0]);
		try {
			//first we upload the images to cloudinary
			const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`;
			const res = await fetch(url, {
				method: "POST",
				body: imageFile,
			});
			if (res.ok) {
				const { secure_url, display_name } = await res.json();
				setImage(secure_url);
				setDisplay_name(display_name);
			}
		} catch (error) {
			console.log(error.message);
		} finally {
			setLoading(false);
		}
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		if (!image) {
			console.log("no image provided");
			return;
		}
		const data = { ...formData, image: image };
		try {
			const serverRes = await fetch("http://localhost:8080/book/add", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});
			if (serverRes.ok) {
				setFormData({});
			}
		} catch (error) {
			console.log(error.message);
		} finally {
			setLoading(false);
		}
	};
	return (
		<section className="h-screen">
			<form
				encType="multipart/form-data"
				onSubmit={handleSubmit}
				className="mt-16 w-[95%] h-[96%] mx-auto">
				<ul className="w-full h-full flex items-center justify-center flex-col gap-y-6 rounded-lg shadow-md bg-gray-50">
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
							onChange={handleInput}
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
							onChange={handleInput}
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
							onChange={handleInput}
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
							htmlFor="price"
							className="uppercase pl-1 font-mono">
							price<span className="text-red-500">*</span>
						</label>
						<input
							onChange={handleInput}
							className="sm:w-96 p-2 rounded-lg shadow-sm pl-4"
							required
							type="number"
							name="price"
							id="price"
							placeholder="Book price"
						/>
					</li>
					<li className="flex flex-col">
						<label
							htmlFor="description"
							className="uppercase pl-1 font-mono">
							description<span className="text-red-500">*</span>
						</label>
						<input
							onChange={handleInput}
							className="sm:w-96 p-2 rounded-lg shadow-sm pl-4"
							required
							type="text"
							name="description"
							id="description"
							placeholder="Book description"
						/>
					</li>
					<li className="flex flex-col">
						{loading ? (
							<>
								<label
									htmlFor="image"
									className="uppercase pl-1 font-mono">
									uploading
								</label>
								<BsCloudUpload className="sm:w-96 w-24 h-24 animate-pulse" />
							</>
						) : (
							<>
								<label
									htmlFor="image"
									className="uppercase pl-1 font-mono">
									image<span className="text-red-500">*</span>
								</label>
								<div
									onDrop={(e) => {
										e.preventDefault();
										e.dataTransfer.files;
									}}
									onClick={() => {
										imageRef.current.click();
									}}
									className="sm:w-96 h-48 font-mono hover:opacity-60 duration-300 bg-gray-300 rounded-lg shadow-sm">
									<img
										src={image ? image : ""}
										alt={
											displayName ||
											"click to choose an image"
										}
										className="w-full h-full object-cover rounded-lg"
									/>
									<input
										ref={imageRef}
										onInput={handleImageUpload}
										className="hidden sm:w-96 p-2 rounded-lg shadow-sm pl-4"
										type="file"
										accept="image/*"
										name="image"
										id="image"
									/>
								</div>
							</>
						)}
					</li>
					<li>
						{loading ? (
							<button
								className="bg-red-300 p-3 rounded-lg"
								disabled>
								Fill all data
							</button>
						) : (
							<button
								className="p-4 font-light bg-gray-200 rounded-xl hover:bg-gray-300 hover:scale-95 duration-300"
								type="submit">
								Add Book
							</button>
						)}
					</li>
				</ul>
			</form>
		</section>
	);
};

export default AddBook;
