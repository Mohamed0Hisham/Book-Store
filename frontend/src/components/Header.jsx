import { ImBooks } from "react-icons/im";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";

const Header = () => {
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
				<Link to={"signin"}>Log in</Link>
			</nav>
		</header>
	);
};

export default Header;
