import landingPhoto from "../assets/Bookshop.gif";
const Landing = () => {
	return (
		<div className="h-screen relative top-3/4 translate-y-1/4">
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
