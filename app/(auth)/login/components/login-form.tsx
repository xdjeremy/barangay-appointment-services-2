"use client";

import React, { FC, useState } from "react";
import LoginInput from "@/app/(auth)/login/components/login-input";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginValidation } from "@/lib/validations/login-validation";
import { pocketbase } from "@/lib/utils/pocketbase";

interface Inputs {
  username: string;
  password: string;
}

const LoginForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({ username, password }) => {
    try {
      setIsLoading(true);

      await pocketbase.collection("users").authWithPassword(username, password);
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
          validation={LoginValidation.username}
          error={errors.username?.message}
        />
        <LoginInput
          name={"password"}
          placeholder={"Password"}
          type={"password"}
          register={register}
          validation={LoginValidation.password}
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
