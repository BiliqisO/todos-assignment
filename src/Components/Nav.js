import { Link } from "react-router-dom";
// import All from "./All";
import React from "react";

function Nav() {
  return (
    <div>
      <nav className="navbar">
        <div className="links">
          <Link to="/">ALL</Link>
          <Link to="/">COMPLETED</Link>
          <Link to="/"> UNCOMPLETED</Link>
        </div>
      </nav>
    </div>
  );
}
export default Nav;
