// Carousel.js
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import biography from "../../assets/biography.jpg";
import fiction from "../../assets/fiction.jpg";
import manga from "../../assets/manga.jpg";
const Carousel = () => {
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	};

	return (
		<div className=" relative left-2  w-[80%] mx-auto ">
			<Slider {...settings}>
				<div>
					<img
						src={biography}
						alt="Slide 1"
						className=" object-cover  w-64 h-64 rounded-lg "
					/>
                    <h2 className=" uppercase font-serif text-center text-lg text-[#000125]">Biograpghy</h2>
				</div>
				<div>
					<img
						src={fiction}
						alt="Slide 2"
						className=" object-cover  w-64 h-64  rounded-lg"
					/>
                    <h2 className=" uppercase font-serif text-center text-lg text-[#000125]">Fiction</h2>
				</div>
				<div>
					<img
						src={manga}
						className=" object-cover  w-64 h-64  rounded-lg"
					/>
                    <h2 className=" uppercase font-serif text-center text-lg text-[#000125]">Manga</h2>
				</div>
			</Slider>
		</div>
	);
};

export default Carousel;
