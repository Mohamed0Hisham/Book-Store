import { ImBooks } from "react-icons/im";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import LogoutBtn from "./LogoutBtn";

const SignedHeader = () => {
	return (
		<header className="z-50 flex text-white justify-between items-center p-2 bg-[#001524] fixed top-0 left-0 right-0">
			<div className="flex items-center text-2xl font-bold">
				<ImBooks />
				<span className="block">Book store</span>
			</div>

			{/* drop menu for small screens */}
			<DropDown />

			<nav className="hidden sm:flex items-center gap-x-8 font-bold font-mono text-xl">
				<Link to={"/"}>Home</Link>
				<Link to={"/all"}>Browse</Link>
				<Link to={"/blog"}>Blog</Link>
				<LogoutBtn />
			</nav>
			<div className={`relative -left-3 top-1`}>
				<FaCartArrowDown size={25} />
				<span className="bg-red-500 rounded-full w-6 h-6 text-center absolute -top-3 -right-4">
					0
				</span>
			</div>
		</header>
	);
};

export default SignedHeader;
