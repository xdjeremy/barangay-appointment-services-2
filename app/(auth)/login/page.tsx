"use client";
import React, { useEffect } from "react";
import { NextPage } from "next";
import Hero from "@/app/components/hero";
import LoginForm from "@/app/(auth)/login/components/login-form";
import { pocketbase } from "@/lib/utils/pocketbase";
import { useRouter } from "next/navigation";

const LoginPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (!pocketbase.authStore.isValid) {
      pocketbase.authStore.clear();
      router.push("/login");
    }
    if (pocketbase.authStore.isValid) {
      router.push("/news");
    }
  });

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
