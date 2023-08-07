"use client";

import React, { FC, useState } from "react";
import RegisterInput from "@/app/(auth)/register/components/reigster-input";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { RegisterSchema } from "@/app/(auth)/register/components/register-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ClientResponseError } from "pocketbase";
import toast from "react-hot-toast";
import { pocketbase } from "@/lib/utils/pocketbase";
import { useRouter } from "next/navigation";

const RegisterForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<z.infer<typeof RegisterSchema>> = async ({
    name,
    username,
    email,
    password,
    passwordConfirm,
  }) => {
    try {
      setIsLoading(true);

      const data = {
        name,
        username,
        email,
        password,
        passwordConfirm,
      };

      await pocketbase.collection("users").create(data);

      // send email
      await pocketbase.collection("users").requestVerification(email);

      toast.success("Account created successfully!");

      router.push("/login");
    } catch (err: any) {
      if (err instanceof ClientResponseError) {
        const obj = Object.keys(err.data.data);
        obj.map((key) => {
          setError(key as any, {
            type: "manual",
            message: err.data.data[key].message,
          });
        });
      } else {
        toast.error("Something went wrong, please try again later");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={
        "flex w-1/2 flex-col items-center justify-center bg-base-300 px-14"
      }
    >
      <div className={"w-[600px]"}>
        <h1 className="text-center text-[36px] font-black leading-7 text-gray-800">
          Register your account
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={"mt-16 flex flex-col gap-12"}
        >
          <RegisterInput
            loading={isLoading}
            name={"name"}
            title={"Name"}
            placeholder={"Enter your full name..."}
            register={register}
            error={errors.name?.message}
          />
          <RegisterInput
            loading={isLoading}
            name={"username"}
            title={"Username"}
            placeholder={"Enter your username..."}
            register={register}
            error={errors.username?.message}
          />
          <RegisterInput
            loading={isLoading}
            name={"email"}
            title={"Email address"}
            placeholder={"Enter your email address..."}
            register={register}
            error={errors.email?.message}
          />
          <RegisterInput
            loading={isLoading}
            name={"password"}
            title={"password"}
            placeholder={"Enter your password..."}
            type={"password"}
            register={register}
            error={errors.password?.message}
          />
          <RegisterInput
            loading={isLoading}
            name={"passwordConfirm"}
            title={"Confirm password"}
            placeholder={"Enter your password again..."}
            type={"password"}
            register={register}
            error={errors.passwordConfirm?.message}
          />
          <button
            type={"submit"}
            disabled={isLoading}
            className="btn-neutral btn mx-auto mt-6 w-[413px]"
          >
            {isLoading ? (
              <>
                <span className="loading loading-spinner"></span>
                loading
              </>
            ) : (
              <>Sign Up</>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
