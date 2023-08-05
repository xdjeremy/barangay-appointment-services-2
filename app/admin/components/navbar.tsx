import React, { FC } from "react";
import Image from "next/image";
import Icon from "../../../assets/images/bas-icon.png";

const AdminNavbar: FC = () => {
  return (
    <div className={"h-screen w-72 bg-gray-800"}>
      <div className={"justify center mt-3 flex flex-col items-center"}>
        <Image src={Icon} alt={"BAS"} width={129} height={68} />
        <span className="text-[15px] font-medium text-white">
          Barangay Appointment Services
        </span>
      </div>
    </div>
  );
};

export default AdminNavbar;
