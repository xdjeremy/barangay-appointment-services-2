"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import Icon from "../../../assets/images/bas-icon.png";
import Link from "next/link";
import { LogOut, User2 } from "lucide-react";

const navLinks: {
  title: string;
  path: string;
}[] = [
  {
    title: "News",
    path: "/news",
  },
  {
    title: "Profile",
    path: "/profile",
  },
  {
    title: "Archive",
    path: "/archive",
  },
  {
    title: "Appointments",
    path: "/appointments",
  },
  {
    title: "Submit a Ticket",
    path: "/ticket",
  },
];
const Navbar: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={
        "flex flex-row items-center justify-between bg-gray-800 px-6 py-4"
      }
    >
      <div className={"flex flex-row items-center gap-12"}>
        <Image src={Icon} alt={"BAS"} width={85} height={41} />
        <ul className={"flex flex-row items-center gap-8"}>
          {navLinks.map((link) => (
            <Link
              href={link.path}
              key={link.path}
              className={"text-[20px] font-semibold text-white"}
            >
              {link.title}
            </Link>
          ))}
        </ul>
      </div>

      {/* user settings */}
      <div className={"relative flex flex-row items-center gap-2.5"}>
        {/*<Grip size={32} color={"white"} />*/}
        <span
          className={
            "flex h-8 w-8 flex-col items-center justify-center rounded-full bg-white p-2"
          }
        >
          <User2
            onClick={() => setOpen(!open)}
            size={28}
            className={"cursor-pointer text-gray-800"}
          />
        </span>
        {open && (
          <div
            className={
              "absolute right-0 top-[54px] z-10 bg-gray-50 px-6 py-3 text-black"
            }
          >
            <ul>
              <Link href={"/logout"}>
                <li
                  className={
                    "flex cursor-pointer flex-row items-center gap-2.5"
                  }
                >
                  <LogOut />
                  Logout
                </li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
