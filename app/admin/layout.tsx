import React, { FC, ReactNode } from "react";
import AdminNavbar from "@/app/admin/components/navbar";
import AdminTopBar from "@/app/admin/components/topbar";

interface Props {
  children: ReactNode;
}

const AdminLayout: FC<Props> = ({ children }) => {
  return (
    <div className={"flex h-screen w-full flex-row bg-neutral-200"}>
      <AdminNavbar />
      <div className={"flex w-full flex-col justify-between"}>
        <AdminTopBar />
        <div className={"h-full px-12 pt-5"}>{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
