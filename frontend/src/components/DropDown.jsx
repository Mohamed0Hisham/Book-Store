import { useContext, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import userContext from "../context/userContext";
const DropDown = () => {
	const [dropMenu, setDropMenu] = useState(false);
	const { user } = useContext(userContext);
	return (
		<nav>
			<MdOutlineMenu
				className="size-10 fixed right-1 top-1 cursor-pointer sm:hidden"
				onClick={() => setDropMenu(!dropMenu)}
			/>
			{dropMenu && (
				<div className="fixed left-0 right-0 top-12 text-black h-screen bg-white opacity-95 z-1000">
					<ul className="text-center text-xl font-bold font-serif p-4 my-12">
						<li className="my-5 border-b-2 p-2 hover:scale-95 hover:bg-slate-100 duration-300">
							<Link to={"/"}>Home</Link>
						</li>
						<li className="my-5 border-b-2 p-2 hover:scale-95 hover:bg-slate-100 duration-300">
							<Link to={"/all"}>Browse</Link>
						</li>

						{user && user.isAdmin ? (
							<li className="my-5 border-b-2 p-2 hover:scale-95 hover:bg-slate-100 duration-300">
								<Link to={"/all"}>Add Book</Link>
							</li>
						) : (
							""
						)}

						{user ? (
							<li className="my-5 border-b-2 p-2 hover:scale-95 hover:bg-slate-100 duration-300">
								<Link to={"exit"}>Log out</Link>
							</li>
						) : (
							<li className="my-5 border-b-2 p-2 hover:scale-95 hover:bg-slate-100 duration-300">
								<Link to={"signin"}>Log in</Link>
							</li>
						)}
					</ul>
				</div>
			)}
		</nav>
	);
};

export default DropDown;
