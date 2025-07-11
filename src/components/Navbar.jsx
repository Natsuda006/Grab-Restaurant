import React from "react";
const NavBar = () => {
  const menuItems = [
    {
      name: "Search",
      url: "/",
    },
    {
      name: "Add restaurant",
      url: '/add',
    },
    {
      name: "About Us",
      url: "/",
    },
  ];
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow z-10">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Grab Restaurant</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.url}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end flex gap-2">
        <a className="btn btn-outline btn-primary">Register</a>
        <a className="btn btn-outline btn-secondary">Log In</a>
      </div>
    </div>
  );
};
export default NavBar;
