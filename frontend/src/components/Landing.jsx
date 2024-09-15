import landingPhoto from "../assets/Bookshop.gif";
const Landing = () => {
	return (
		<div className="h-screen flex flex-col lg:flex-row justify-center items-center">
			<img src={landingPhoto} alt="landing photo" />
			<div className=" text-center">
				<h1 className="block font-bold text-3xl leading-7">
					Discover Your Next Favorite Book Here.
				</h1>
				<p className="text-[#455a64] text-lg">
					Explore our curated collection of new and popular books to
					find your next literary adventure.
				</p>
			</div>
		</div>
	);
};

export default Landing;
