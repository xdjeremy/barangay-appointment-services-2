import React, { FC } from "react";
import Logo from "../../assets/images/bas.png";
import Image from "next/image";
import Link from "next/link";

const AuthOptions: FC = () => {
  return (
    <div
      className={
        "flex flex-col items-center gap-40 rounded-2xl bg-zinc-100 px-20 py-9"
      }
    >
      <Image src={Logo} alt={"BAS"} width={223} height={125} />
      <div className={"flex w-full flex-col gap-8"}>
        <Link href={"/login"} className={"btn-outline btn w-[413px]"}>
          login
        </Link>
        <Link href={"/register"} className={"btn-neutral btn w-[413px]"}>
          register
        </Link>
      </div>
    </div>
  );
};

export default AuthOptions;
