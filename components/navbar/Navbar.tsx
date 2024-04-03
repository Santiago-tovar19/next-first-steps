import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import React from "react";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
  { name: "about", href: "/about" },
  { name: "contact", href: "/contact" },
  { name: "precing", href: "/precing" },
];

//server components , no se puede usar hooks, son  componentes que se renderizan en el servidor

export const Navbar = async () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href="/" className="flex items-center">
        <HomeIcon className="text-xl" />
        <span className="text-2xl ml-4">Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {navItems.map((navItem) => (
        <ActiveLink key={navItem.name} {...navItem} />
      ))}
    </nav>
  );
};
