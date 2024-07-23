import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import React from "react";

import { Outlet } from "react-router-dom";

type Props = {};

const LayoutRoute = (props: Props) => {
  return (
    <div>
      {/* Header */}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutRoute;
