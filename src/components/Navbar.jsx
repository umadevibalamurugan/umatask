import React from "react";
import '../styles/Navbar.css'
import { Link } from "react-router-dom";
const Navbar = () => {
  const NavLinks = [
    {
      name: "CristopherGaracle",
      Link: "/",
    },
    {
      name: "NowAvailable",
      Link: "/NowAvailable",
    },
  ];
  return (
    <div className={`header`}>
    {/* Left side */}
      <div className="LeftSection">
        
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
        <img
          src="Logo.jpg"
          alt="Logo"
          className={`Logo`}
          style={{ width: 50, height: 50 }}
        />
        <img
          src="dribbble-ball-mark.jpg"
          alt=""
          className={`image`}
          style={{ width: 50, height: 50 }}
        />
        <img
          src="Logo Linkedin.jpg"
          alt=""
          className={`image`}
          style={{ width: 50, height: 50 }}
        />
      </div>

    </div>
  );
};

export default Navbar;