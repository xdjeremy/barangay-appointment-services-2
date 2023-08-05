import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import BAS from "../../../assets/images/basbas.png";
import RegisterForm from "@/app/(auth)/register/components/register-form";

const Register: NextPage = () => {
  return (
    <div className={"flex h-screen w-full flex-row bg-base-300"}>
      <Image src={BAS} alt={"BAS"} className={"w-1/2"} />
      <RegisterForm />
    </div>
  );
};

export default Register;
