"use client";

import React, { FC, useState } from "react";
import LoginInput from "@/app/(auth)/login/components/login-input";
import { SubmitHandler, useForm } from "react-hook-form";
import { pocketbase } from "@/lib/utils/pocketbase";
import { z } from "zod";
import { LoginSchema } from "@/app/(auth)/login/components/login-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const LoginForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<z.infer<typeof LoginSchema>> = async ({
    username,
    password,
  }) => {
    try {
      setIsLoading(true);

      await pocketbase.collection("users").authWithPassword(username, password);

      // Redirect to home page
      await router.push("/news");
    } catch (err: any) {
      setError("username", {
        type: "manual",
        message: err.data.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={
        "flex w-[578px] flex-col items-center gap-16 rounded-2xl bg-zinc-100 px-14 py-32"
      }
    >
      <div className={"flex w-full flex-col gap-2"}>
        <div className="text-[36px] font-black leading-7 text-gray-800">
          Login
        </div>
        <div className="h-7 w-[283px] text-[15px] font-extralight text-black">
          Please login to your account.
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={"flex w-full flex-col gap-8"}
      >
        <LoginInput
          name={"username"}
          placeholder={"Username or Email Address"}
          type={"text"}
          register={register}
          error={errors.username?.message}
        />
        <LoginInput
          name={"password"}
          placeholder={"Password"}
          type={"password"}
          register={register}
          error={errors.password?.message}
        />
        <button
          type={"submit"}
          className={"btn-neutral btn"}
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <>Login</>
          )}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
