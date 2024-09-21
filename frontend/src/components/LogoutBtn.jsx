import { useContext } from "react";
import userContext from "../context/userContext";

const LogoutBtn = () => {
	const { user, setUser } = useContext(userContext);
	const handleLogout = async () => {
		const userRes = await fetch("http://localhost:8080/authentication/signout", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({_id:user._id}),
		});
		if (userRes.ok) {
			sessionStorage.removeItem("user");
			const { data } = await userRes.json();
			setUser(data);
		}
	};
	return (
		<button onClick={handleLogout} className="hover:text-blue-300">
			Log out
		</button>
	);
};

export default LogoutBtn;
