import { Suspense } from "react";
import AppBar from "./AppBar/AppBar";
// import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};

export default Layout;
