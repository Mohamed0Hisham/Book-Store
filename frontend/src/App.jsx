import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/footer";
import AllBooks from "./pages/AllBooks";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/all" element={<AllBooks />} />
				<Route path="/signin" element={<LogIn />} />
				<Route path="/signup" element={<SignUp />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
