import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center p-6 text-white">
      <div className="font-logo text-4xl">Backend++</div>
      <ul className="font-body text-xl flex flex-row gap-9 items-center">
        <li>Pricing</li>
        <li>Developers</li>
        <li>Community</li>
        <li>
          <Link to="/login">Log In</Link>
        </li>
        <li className="px-9 py-4 border-2 border-white rounded-lg font-bold hover:bg-white hover:text-black hover:cursor-pointer">
          <Link to="/register">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
