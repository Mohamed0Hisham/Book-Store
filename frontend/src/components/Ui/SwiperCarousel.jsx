import { Swiper, SwiperSlide } from "swiper/react";
import biography from "../../assets/biography.jpg";
import fiction from "../../assets/fiction.jpg";
import manga from "../../assets/manga.jpg";
import { useEffect, useState } from "react";
// Import Swiper styles
import "swiper/css";

const SwiperCarousel = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const [count, setCount] = useState(1);
	useEffect(() => {
		window.addEventListener("resize", setWidth(window.innerWidth));
		const Small = 640;
		const meduim = 1080;
		console.log(width);
		if (width <= Small) setCount(1);
		else if (width > Small && width <= meduim) setCount(2);
		else if (width >= meduim) setCount(3);
	}, [width]);
	return (
		<Swiper spaceBetween={20} slidesPerView={count}>
			<SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
				<div className="relative">
					<img
						src={biography}
						alt="Slide 1"
						className=" object-cover w-64 h-64 rounded-lg"
					/>
					<h2 className="block absolute left-[8rem] -translate-x-1/2 uppercase font-serif text-lg text-[#000125]">
						Biograpghy
					</h2>
				</div>
			</SwiperSlide>
			<SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
				<div className="relative h-[18rem]">
					<img
						src={fiction}
						alt="Slide 2"
						className=" object-cover w-64 h-64  rounded-lg"
					/>
					<h2 className="uppercase absolute left-[8rem] -translate-x-1/2 font-serif text-lg text-[#000125]">
						Fiction
					</h2>
				</div>
			</SwiperSlide>
			<SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
				<div className="relative h-[18rem]">
					<img
						src={manga}
						alt="Slide 2"
						className=" object-cover w-64 h-64  rounded-lg"
					/>
					<h2 className="uppercase absolute left-[8rem] -translate-x-1/2 font-serif text-lg text-[#000125]">
						Manga
					</h2>
				</div>
			</SwiperSlide>
		</Swiper>
	);
};
export default SwiperCarousel;
