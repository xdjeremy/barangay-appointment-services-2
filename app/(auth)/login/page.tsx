import React from "react";
import { NextPage } from "next";
import Hero from "@/app/components/hero";
import LoginForm from "@/app/(auth)/login/components/login-form";

const LoginPage: NextPage = () => {
  return (
    <div
      className={
        "flex h-screen w-full flex-col items-center justify-center bg-base-300"
      }
    >
      <div className={"flex h-[765px] w-full flex-row justify-center gap-20"}>
        <Hero />
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
