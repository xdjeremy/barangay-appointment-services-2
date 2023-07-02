import React, { FC } from "react";
import { cn } from "@/lib/utils/cn";

interface Props {
  placeholder: string;
  name: string;
  type: "text" | "password";
  loading?: boolean;
  register: any;
  error?: string;
}

const LoginInput: FC<Props> = ({
  placeholder,
  name,
  type,
  loading,
  register,
  error,
}) => {
  return (
    <div className={"form-control w-full"}>
      <input
        {...register(name)}
        placeholder={placeholder}
        className={cn(
          error ? "input-error" : "",
          "input-bordered input w-full text-black"
        )}
        type={type}
        disabled={loading}
      />
      {error && (
        <label className="label">
          <span className="label-text-alt text-error">{error}</span>
        </label>
      )}
    </div>
  );
};

export default LoginInput;
