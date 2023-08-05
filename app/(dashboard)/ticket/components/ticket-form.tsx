"use client";
import React, { FC } from "react";
import { z } from "zod";
import {
  FormProvider,
  SubmitHandler,
  useForm,
  useFormContext,
} from "react-hook-form";
import { TicketSchema } from "@/app/(dashboard)/ticket/components/ticket-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { TicketsPurposeOptions } from "@/types/pocketbase-types";
import { cn } from "@/lib/utils/cn";

interface InputProps {
  label: string;
  name: keyof z.infer<typeof TicketSchema>;
}

const Input: FC<InputProps> = ({ label, name }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<z.infer<typeof TicketSchema>>();

  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        {...register(name)}
        type="text"
        className="input-bordered input w-full max-w-xs text-black"
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

interface RadioProps {
  name: keyof z.infer<typeof TicketSchema>;
  label: string;
  value: TicketsPurposeOptions;
}

const Radio: FC<RadioProps> = ({ name, label, value }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<z.infer<typeof TicketSchema>>();

  return (
    <div className="form-control">
      <label className="label w-fit cursor-pointer">
        <input
          {...register(name)}
          type="radio"
          className="radio"
          value={value}
        />
        <span className={cn(errors[name] && "text-red-600", "label-text ml-3")}>
          {label}
        </span>
      </label>
    </div>
  );
};

const TicketForm: FC = () => {
  const register = useForm<z.infer<typeof TicketSchema>>({
    resolver: zodResolver(TicketSchema),
  });

  const submitTicket: SubmitHandler<z.infer<typeof TicketSchema>> = async (
    data
  ) => {
    console.log(data);
  };

  return (
    <FormProvider {...register}>
      <form
        onSubmit={register.handleSubmit(submitTicket)}
        className={
          "flex w-full flex-row justify-between rounded-lg bg-zinc-100 px-12 py-14"
        }
      >
        <div className={"flex flex-col gap-10"}>
          <div className={"flex flex-row gap-12"}>
            <Input label={"Name"} name={"firstName"} />
            <Input label={"Last Name"} name={"lastName"} />
          </div>
          <div>
            <Input label={"Email"} name={"email"} />
          </div>
          <div>
            <span className="text-2xl font-normal text-black">
              What can we help you with today?
            </span>
            <Radio
              name={"purpose"}
              value={TicketsPurposeOptions.general_question}
              label={"General Question"}
            />
            <Radio
              name={"purpose"}
              value={TicketsPurposeOptions.feature_request}
              label={"Feature Request"}
            />
            <Radio
              name={"purpose"}
              value={TicketsPurposeOptions.bug_report}
              label={"Bug Report"}
            />
            <Radio
              name={"purpose"}
              value={TicketsPurposeOptions.my_account}
              label={"My Account"}
            />
            <Radio
              name={"purpose"}
              value={TicketsPurposeOptions.other}
              label={"Other"}
            />
          </div>
        </div>

        <div>
          <span className="text-2xl font-normal text-black">
            What are your concerns for today?
          </span>
          <textarea
            className={cn(
              register.formState.errors.body && "textarea-error",
              "textarea-bordered textarea w-full text-black"
            )}
            rows={10}
            {...register.register("body")}
          ></textarea>
          <div className={"mt-20 flex w-full flex-col items-end justify-end"}>
            <button type={"submit"} className="btn-neutral btn ml-auto">
              Submit
            </button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default TicketForm;
