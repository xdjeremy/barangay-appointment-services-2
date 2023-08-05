import React, { FC } from "react";
import Image from "next/image";
import { UsersResponse } from "@/types/pocketbase-types";

interface Props {
  userData: UsersResponse | undefined;
}

const ProfileHeader: FC<Props> = ({ userData }) => {
  return (
    <div className={"relative mt-9 h-80 bg-zinc-100"}>
      <div
        className={
          "absolute -bottom-20 left-16 flex flex-row items-center gap-2"
        }
      >
        <Image
          alt={"profile"}
          width={200}
          height={200}
          className="rounded-full"
          src="https://via.placeholder.com/200x200"
        />
        <div className="text-5xl font-medium text-black">{userData?.name}</div>
      </div>
    </div>
  );
};

export default ProfileHeader;
