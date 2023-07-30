"use client";
import React, { FC } from "react";
import { useFormContext } from "react-hook-form";
import { ArchiveSchema } from "@/app/(dashboard)/archive/components/archive-schema";
import { z } from "zod";
import { cn } from "@/lib/utils/cn";

interface InputProps {
  label: string;
  name: keyof z.infer<typeof ArchiveSchema>;
  register: any;
  type?: string;
}

const Input: FC<InputProps> = ({ label, name, type = "text" }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<z.infer<typeof ArchiveSchema>>();
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        {...register(name)}
        type={type}
        className={cn(
          errors.lastName?.message && "input-error",
          "input-bordered input w-full text-black"
        )}
      />
      {errors[name]?.message && (
        <label className={"label"}>
          <span className={"label-text-alt text-error"}>
            {errors[name]?.message}
          </span>
        </label>
      )}
    </div>
  );
};

const UserDetailsCard = () => {
  const { register } = useFormContext<z.infer<typeof ArchiveSchema>>();
  return (
    <div className="w-full rounded-2xl bg-zinc-100 px-6 pb-28 pt-20">
      <h2 className="pl-2.5 text-4xl font-black leading-7 text-gray-800">
        User details
      </h2>

      <div className={"flex flex-col gap-6"}>
        <div className={"mt-16 flex flex-row gap-2"}>
          <Input register={register} name={"lastName"} label={"Last Name"} />
          <Input register={register} name={"firstName"} label={"First Name"} />
          <Input
            register={register}
            name={"middleName"}
            label={"Middle Name"}
          />
        </div>
        <Input register={register} name={"address"} label={"Address"} />
        <Input register={register} name={"email"} label={"Email Address"} />
        <div className={"flex flex-row gap-2"}>
          <Input
            register={register}
            name={"birthdate"}
            label={"Birthdate"}
            type={"date"}
          />
          <Input
            register={register}
            name={"contactNumber"}
            label={"Contact Number"}
          />
        </div>
      </div>
    </div>
  );
};

export default UserDetailsCard;