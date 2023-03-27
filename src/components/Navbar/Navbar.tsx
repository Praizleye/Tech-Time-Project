import React, { useState } from "react";
import { InView } from "react-intersection-observer";
import { NavStyle } from "./styled.Navbar";

// importing assets
import { images } from "../../constants";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const [showNav, setShowNav] = useState<boolean>(true); // keep track of whether to show the nav
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0); // keep track of the previous scroll position

  const navItems = [
    { label: "home", href: "#home" },
    { label: "about us", href: "#about" },
    { label: "courses", href: "#courses" },
    { label: "testimonial", href: "#testimonial" },
    { label: "community", href: "#community" },
  ];

  const handleNavItemClick = (item: NavItemProps) => {
    setActiveItem(item.label);
  };

  return (
    <NavStyle>
      <div>
        <img src={images.Logo} alt="logo" />
      </div>

      <ul>
        {navItems.map((item) => (
          <li key={item.label} onClick={() => handleNavItemClick(item)}>
            <a
              href={item.href}
              className={activeItem === item.label ? "active" : "inactive"}
            >
              {item.label}
            </a>
          </li>
        ))}
        <button>Enroll now</button>
      </ul>
    </NavStyle>
  );
};

export default Navbar;

// types are written here because i want a clear view
type NavItemProps = {
  label: string;
  href: string;
};
