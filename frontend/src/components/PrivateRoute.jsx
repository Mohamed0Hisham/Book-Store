import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import userContext from "../context/userContext";

const PrivateRoute = () => {
	const { user } = useContext(userContext);
	return user ? <Outlet /> : <Navigate to={"/signin"} />;
};

export default PrivateRoute;
