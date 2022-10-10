import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Nav.style.scss";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const isToggle = () => {
    setToggle(toggle === false ? true : false);
  };

  return (
    <>
      <header>
        <div className="logo" onClick={isToggle}>
          <Link to="/">Logo</Link>
        </div>
        <nav>
          <i className="fa fa-bars" aria-hidden="true" onClick={isToggle} />
          <ul className={`collapsed ${toggle ? "is-expanded" : ""}`}>
            <NavLink activeClassName="active" onClick={isToggle} to="/project">
              <li>Projects</li>
            </NavLink>
            <NavLink activeClassName="active" onClick={isToggle} to="/skill">
              <li>Skills</li>
            </NavLink>
            <NavLink activeClassName="active" onClick={isToggle} to="/contact">
              <li>Contact Me</li>
            </NavLink>
            <NavLink activeClassName="active" onClick={isToggle} to="/resume">
              <li>Resume</li>
            </NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Nav;
