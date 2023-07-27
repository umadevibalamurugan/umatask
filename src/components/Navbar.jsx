import React from "react";
import '../styles/Navbar.css'
import { Link } from "react-router-dom";
const Navbar = () => {
  const NavLinks = [
    {
      name: "Home",
      Link: "/",
    },
    {
      name: "Products",
      Link: "/products",
    },
    {
      name: "Dashboard",
      Link: "/dashboard",
    },
    {
      name: "Pricing",
      Link: "/pricing",
    },
  ];
  return (
    <div className={`header`}>
    {/* Left side */}
      <div className="leftSection">
        <img
          src="/logo.jpeg"
          alt=""
          className={`image`}
          style={{ width: 50, height: 50 }}
        />
        {/* Nav links */}
        <div className="Links">
          {NavLinks.map((Data, index) => {
            return (
              <Link key={index} to={Data.Link}>
                  <p className={`NavLinks`}>{Data.name}</p>
              </Link>
            )
          })}
        </div>

      </div>
          {/* Right side */}
      <div className="RightSection">
        <button className={`Login`}>Login</button>
        <button className={`SignUp`}>Signup</button>
      </div>

    </div>
  );
};

export default Navbar;
