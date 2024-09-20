/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const userContext = createContext({});

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(() => {
		const savedUser = sessionStorage.getItem("user");
		return savedUser ? savedUser : null;
	});
	const [token, setToken] = useState("");
	return (
		<userContext.Provider
			value={{
				user,
				setUser,
				token,
				setToken,
			}}>
			{children}
		</userContext.Provider>
	);
};
// eslint-disable-next-line react-refresh/only-export-components
export default userContext;
