import React, { FC, ReactNode } from "react";
import Image from "next/image";
import Icon from "../../../assets/images/bas-icon.png";
import Link from "next/link";
import { Archive, File, MessageSquarePlus } from "lucide-react";

interface INavLinks {
  icon: ReactNode;
  title: string;
  href: string;
}

const NavLinks: INavLinks[] = [
  {
    icon: <Archive />,
    title: "Manage Archives",
    href: "/admin/archive",
  },
  {
    icon: <File />,
    title: "View Appointments",
    href: "/admin/appointments",
  },
  {
    icon: <MessageSquarePlus />,
    title: "View Tickets",
    href: "/admin/tickets",
  },
];

const NavItem: FC<INavLinks> = ({ icon, title, href }) => {
  return (
    <Link href={href} className={"flex flex-row items-center"}>
      {icon}
      <div className="font-semibold text-white">{title}</div>
    </Link>
  );
};
const AdminNavbar: FC = () => {
  return (
    <div className={"h-screen w-72 bg-gray-800"}>
      <div className={"justify center mt-3 flex flex-col items-center"}>
        <Image src={Icon} alt={"BAS"} width={129} height={68} />
        <span className="text-[15px] font-medium text-white">
          Barangay Appointment Services
        </span>
      </div>
      <div className={"mt-24 grid grid-cols-1 justify-items-start gap-5 pl-3"}>
        {NavLinks.map((link) => (
          <NavItem
            icon={link.icon}
            title={link.title}
            href={link.href}
            key={link.title}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminNavbar;
