"use client";
import React from "react";
import Link from "next/link";
import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface Props {
  name: string;
  href: string;
}

export const ActiveLink = ({ name, href }: Props) => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <Link
      className={`${style.link}  ${pathName == href && style["active-link"]}`}
      href={href}
      key={name}
    >
      {name}{" "}
    </Link>
  );
};
