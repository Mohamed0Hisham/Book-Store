import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/footer";
import AllBooks from "./pages/AllBooks";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import AddBook from "./pages/AddBook";
import Book from "./pages/Book";
import SignedHeader from "./components/SignedHeader";
import userContext from "./context/userContext";
import PrivateRoute from "./components/PrivateRoute";
import AdminOnlyRoute from "./components/AdminOnlyRoute";
import { useContext } from "react";
import Blog from "./pages/Blog";

function App() {
	const { user } = useContext(userContext);
	return (
		<>
			{user?.isSigned ? <SignedHeader /> : <Header />}
			<Routes>
				<Route path="/" element={<Home />} exact />
				<Route path="/all" element={<AllBooks />} />
				<Route path="/book/:id" element={<Book />} />
				<Route path="/signin" element={<LogIn />} />
				<Route path="/signup" element={<SignUp />} />

				{/* only user routes */}
				<Route element={<PrivateRoute />}>
					<Route path="/blog" element={<Blog/>} />
				</Route>

				{/* only admin routes */}
				<Route element={<AdminOnlyRoute />}>
					<Route path="/admin/add" element={<AddBook />} />
				</Route>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
