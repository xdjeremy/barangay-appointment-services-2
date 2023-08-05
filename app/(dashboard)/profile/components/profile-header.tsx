import React from "react";
import Image from "next/image";

const ProfileHeader = () => {
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
        <div className="h-[73px] w-[300px] text-5xl font-medium text-black">
          John A. Doe
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
