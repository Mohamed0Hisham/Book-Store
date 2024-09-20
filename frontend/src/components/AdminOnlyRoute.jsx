import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import userContext from "../context/userContext";

const AdminOnlyRoute = () => {
	const { user } = useContext(userContext);
	return user && user.isAdmin ? <Outlet /> : <Navigate to={"/signin"} />;
};

export default AdminOnlyRoute;
