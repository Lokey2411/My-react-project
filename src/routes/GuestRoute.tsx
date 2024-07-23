import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

type Props = {};

// eslint-disable-next-line no-empty-pattern
const GuestRoute = ({}: Props) => {
  const location = useLocation();
  // const { user } = useAppSelector((state: RootState) => state.user);
  const user = true;
  return user ? (
    <Navigate to={"/"} state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export default GuestRoute;
