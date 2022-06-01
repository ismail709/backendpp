import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const showMenu = () => {
    setOpen(true);
  };
  const hideMenu = () => {
    setClose(true);
    setTimeout(() => {
      setOpen(false);
      setClose(false);
    }, 195);
  };
  return (
    <nav className="flex flex-row justify-between items-center p-6 text-white relative">
      <div className="font-logo text-3xl sm:text-4xl">Backend++</div>
      <div className="hidden sm:block">
        <ul className="font-body text-xl flex p-4 flex-row gap-9 items-center">
          <li>Pricing</li>
          <li>Developers</li>
          <li>Community</li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li className="px-9 py-4 border-2 border-black sm:border-white rounded-lg font-bold hover:bg-white hover:text-black hover:cursor-pointer">
            <Link to="/register">Sign Up</Link>
          </li>
        </ul>
      </div>
      <div className="sm:hidden">
        <div className="flex justify-center items-center sm:hidden">
          {open ? (
            <button onClick={hideMenu} id="close-nav-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white w-8 h-8"
                viewBox="0 0 320 512"
              >
                <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
              </svg>
            </button>
          ) : (
            <button onClick={showMenu} id="open-nav-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="fill-white w-8 h-8"
              >
                <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
              </svg>
            </button>
          )}
        </div>
        {open && (
          <ul
            className={`font-body text-xl flex flex-col absolute top-full left-0 w-full bg-white text-black p-4 sm:flex-row gap-9 items-center  ${
              open && "animate-opennav"
            } ${close && "animate-closenav"} `}
          >
            <li onClick={hideMenu}>Pricing</li>
            <li onClick={hideMenu}>Developers</li>
            <li onClick={hideMenu}>Community</li>
            <li onClick={hideMenu}>
              <Link to="/login">Log In</Link>
            </li>
            <li
              onClick={hideMenu}
              className="px-9 py-4 border-2 border-black sm:border-white rounded-lg font-bold hover:bg-white hover:text-black hover:cursor-pointer"
            >
              <Link to="/register">Sign Up</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
