// NOTE: This page is temporary and it will be removed in future. This page is used to show all the routes in the application.

import * as React from "react";
import { Link } from "react-router-dom";

const links = [
  {
    title: "Routes Page",
    href: "/",
  },
  {
    title: "SellerSpot Dashboard",
    href: "/dashboard",
  },
  {
    title: "Admin Page",
    href: "/admin",
  },
  {
    title: "Auth Page",
    children: [
      {
        title: "Login",
        href: "/auth/login",
      },
      {
        title: "Register",
        href: "/auth/signup",
      },
    ],
  },
];

const Root = () => {
  const [listDropdown, setListDropdown] = React.useState(
    JSON.parse(localStorage.getItem("home-route-list-dropdown")) || {}
  );

  function toggleDropdown(index) {
    const listDropdown2 = { ...listDropdown, [index]: !listDropdown[index] };
    localStorage.setItem(
      "home-route-list-dropdown",
      JSON.stringify(listDropdown2)
    );
    setListDropdown(listDropdown2);
  }

  return (
    <div className="container py-24 px-12">
      <h1 className="mb-3 text-4xl font-bold text-primary">
        Welcome to <span className="text-white">SellerSpot</span> Links Page
      </h1>

      <p className="w-1/2">
        If you create a new route, you can add here for easy access. You can
        also add a link to the sidebar.
      </p>

      <ul className="mt-6 pl-4" style={{ listStyleType: "disclosure-closed" }}>
        {links.map((link, index) => (
          <li
            key={index}
            className="mb-2"
            style={{
              listStyleType:
                link.children && listDropdown[index] && "disclosure-open",
            }}
          >
            {link.children ? (
              <>
                <p
                  className="font-semibold"
                  onClick={() => link.children && toggleDropdown(index)}
                >
                  {link.title}
                </p>
                <ul
                  className="pl-4"
                  style={{
                    listStyleType: "circle",
                    display: listDropdown[index] ? "block" : "none",
                  }}
                >
                  {link.children.map((child, index) => (
                    <li key={index} className="mt-2">
                      <Link to={child.href} className="text-white">
                        {child.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link to={link.href} className="text-white">
                {link.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Root;
