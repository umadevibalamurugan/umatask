import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="Layout">
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
export default Layout;
