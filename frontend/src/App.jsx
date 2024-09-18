import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/footer";
import AllBooks from "./pages/AllBooks";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import AddBook from "./pages/AddBook";
import Book from "./pages/Book";
import { createContext, useState} from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const userContext = createContext();

function App() {
	const [user, setUser] = useState(null)
	return (
		<>
			<userContext.Provider
				value={{
					user,
					setUser,
				}}>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/all" element={<AllBooks />} />
					<Route path="/book/:id" element={<Book />} />
					<Route path="/signin" element={<LogIn />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/admin/add" element={<AddBook />} />
				</Routes>
				<Footer />
			</userContext.Provider>
		</>
	);
}

export default App;
