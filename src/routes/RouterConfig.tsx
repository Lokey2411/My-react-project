import { Route, Routes } from "react-router-dom";
import LayoutRoute from "./LayoutRoute";
import Home from "@/pages/home/Home";
import About from "@/pages/about/About";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "@/pages/error/NotFound";
import GuestRoute from "./GuestRoute";
import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";
import { INTRODUCTION_PATH } from "./constant";
import Introduction from "@/pages/Introduction";

type Props = {};

export const ROLES = {
	USER: "0",
	ADMIN: "1",
};

const RouterConfig = (props: Props) => {
	return (
		<Routes>
			{/* Add error, loading */}

			{/* public routes */}
			<Route element={<LayoutRoute />}>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="about"
					element={<About />}
				/>
				<Route
					path={INTRODUCTION_PATH}
					element={<Introduction />}
				/>
				{/* For user */}
				<Route element={<ProtectedRoute allowedRoles={[ROLES.USER]} />}>{/* <Route path="/profile/:id" element={<Profile />} /> */}</Route>
				{/* For Admin */}
				<Route element={<ProtectedRoute allowedRoles={[ROLES.ADMIN]} />}>{/* <Route path="/dashboard" element={<Dashboard />} /> */}</Route>
				{/* Catch all */}
				<Route
					path="*"
					element={<NotFound />}
				/>
			</Route>
			<Route element={<GuestRoute />}>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/signup"
					element={<Signup />}
				/>
			</Route>
		</Routes>
	);
};

export default RouterConfig;
