import React, { FC } from "react";
import { cn } from "@/lib/utils/cn";

interface Props {
  title: string;
  name: string;
  placeholder?: string;
  type?: "text" | "password";
  register: any;
  error?: string;
  loading: boolean;
}

const RegisterInput: FC<Props> = ({
  title,
  name,
  placeholder,
  type = "text",
  register,
  error,
  loading,
}) => {
  return (
    <div className={"relative flex flex-col"}>
      <label htmlFor={name} className={"h-7 text-[24px] font-light text-black"}>
        {title}
      </label>
      <input
        {...register(name)}
        placeholder={placeholder}
        type={type}
        disabled={loading}
        className={cn(
          error ? "border-error" : "border-black",
          "w-full border-b bg-transparent pb-2 pl-0.5 text-black focus:outline-none"
        )}
      />
      {error && (
        <span className={"absolute top-16 text-[14px] font-light text-error"}>
          {error}
        </span>
      )}
    </div>
  );
};

export default RegisterInput;
