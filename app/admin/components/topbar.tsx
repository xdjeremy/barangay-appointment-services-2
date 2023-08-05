import React from "react";

const AdminTopBar = () => {
  return (
    <div
      className={
        "flex w-full flex-row items-center justify-end bg-zinc-100 p-6 text-black"
      }
    >
      <div className={"flex flex-row items-center gap-5"}>
        <div className={"flex flex-col"}>
          <div className="text-xl font-semibold text-black">Ralph Anderson</div>
          <div className="text-xs font-light text-black">Admin</div>
        </div>
      </div>
    </div>
  );
};

export default AdminTopBar;
