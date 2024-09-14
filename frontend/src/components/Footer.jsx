import { ImBooks } from "react-icons/im";
import { CiMail } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
const Footer = () => {
	return (
		<footer className="bg-[#001524] text-white p-2">
			<div className="border-b border-slate-300 p-3 text-center">
				<div className="flex justify-center">
					<ImBooks className="inline size-7" />
					<h1 className="uppercase font-extrabold text-xl mb-6">
						book-it
					</h1>
				</div>
				<p>
					Book-IT is an online React web application where the
					customer can purchase books online. Through this book store
					the users can search for a book by its title and later can
					add to the shopping cart and finally purchase using credit
					card transaction.
				</p>
			</div>
			<div className="border-b border-slate-300 p-3 text-center">
				<h1 className="uppercase font-extrabold text-xl mb-6">
					products
				</h1>
				<ul>
					<li>Book-It</li>
					<li>Portfolio</li>
				</ul>
			</div>
			<div className= "p-3 text-center">
				<h1 className="uppercase font-extrabold  text-xl mb-6">
					contact
				</h1>
				<ul>
					<li>
						<CiMail className="inline size-5"/> medoohisham12@gmail.com
					</li>
					<li>
						<CiLinkedin className="inline size-6" /> Linked In{" "}
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
