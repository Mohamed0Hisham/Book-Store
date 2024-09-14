import Carousel from "./Ui/Carousel";

const Categories = () => {
	return (
		<div>
			<section className="mb-10">
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold block ">Categories</h1>
					<p className="text-xl font-semibold block ">
						Browse our featured categories
					</p>
				</div>
				<div className="">
					<Carousel />
				</div>
			</section>
		</div>
	);
};

export default Categories;
