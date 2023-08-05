import React, { FC } from "react";
import {
  FormProvider,
  SubmitHandler,
  useForm,
  useFormContext,
} from "react-hook-form";
import { z } from "zod";
import { ProfileSchema } from "@/app/(dashboard)/profile/components/profile-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { UsersGenderOptions, UsersRecord } from "@/types/pocketbase-types";
import toast from "react-hot-toast";
import { pocketbase } from "@/lib/utils/pocketbase";
import { cn } from "@/lib/utils/cn";

interface InputProps {
  label: string;
  name: keyof z.infer<typeof ProfileSchema>;
  type?: "text" | "date";
}

const Input: FC<InputProps> = ({ label, name, type = "text" }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<z.infer<typeof ProfileSchema>>();

  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        {...register(name)}
        type={type}
        className={cn(
          errors[name] && "input-error",
          "input-bordered input w-full max-w-xs"
        )}
      />
      {errors[name] && (
        <label className="label">
          <span className="label-text-alt">{errors[name]?.message}</span>
        </label>
      )}
    </div>
  );
};

const GenderSelect: FC = () => {
  const { register } = useFormContext<z.infer<typeof ProfileSchema>>();

  return (
    <div className={"form-control w-full max-w-xs"}>
      <label className="label">
        <span className="label-text">Gender</span>
      </label>
      <select {...register("gender")} className={"select-bordered select"}>
        <option value={UsersGenderOptions.male}>Male</option>
        <option value={UsersGenderOptions.female}>Female</option>
        <option value={UsersGenderOptions.other}>Other</option>
      </select>
    </div>
  );
};
const EditProfile: FC = () => {
  const register = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
  });

  const editProfileHandler: SubmitHandler<
    z.infer<typeof ProfileSchema>
  > = async (data) => {
    try {
      const body: UsersRecord = {
        birth_date: new Date(data.birthDate).toISOString(),
        gender: data.gender,
        phone: parseInt(data.phone),
        street: data.street,
        city: data.city,
        province: data.province,
        work: data.work,
        work_phone: data.workPhone,
      };

      await pocketbase
        .collection("users")
        .update(pocketbase.authStore.model?.id!, body);
      toast.success("Profile updated successfully");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <FormProvider {...register}>
      <dialog id="my_modal_1" className="modal-scroll modal">
        <form
          onSubmit={register.handleSubmit(editProfileHandler)}
          method="dialog"
          className="modal-box"
        >
          <h3 className="text-center text-4xl font-bold text-gray-800">
            Edit Profile
          </h3>

          <div className="mb-2.5 mt-7 text-xl font-bold text-gray-800">
            Profile Picture
          </div>
          <div className="mx-auto h-[198px] w-[202px] rounded-full bg-zinc-300" />

          <div className={"mt-20 flex flex-row gap-14"}>
            <div className={"flex flex-col gap-2"}>
              <span className="text-xl font-bold text-gray-800">
                Customize Basic Information
              </span>
              <Input label={"Birthdate"} name={"birthDate"} type={"date"} />
              <GenderSelect />
            </div>

            <div className={"flex flex-col gap-2"}>
              <span className="text-xl font-bold text-gray-800">
                Contact Information
              </span>
              <Input label={"Phone"} name={"phone"} />
            </div>
          </div>

          <div className={"mt-28"}>
            <h3 className="text-xl font-bold text-gray-800">Address</h3>
            <Input label={"Street"} name={"street"} />
            <Input label={"City"} name={"city"} />
            <Input label={"State/Province/Area"} name={"province"} />
          </div>

          <div className={"mt-24"}>
            <h3 className="text-xl font-bold text-gray-800">Work</h3>
            <Input label={"Works at"} name={"work"} />
            <Input label={"Phone"} name={"workPhone"} />
          </div>
          <div className="modal-action">
            <button type={"submit"} className={"btn-neutral btn"}>
              Submit
            </button>
            <button
              // @ts-ignore
              onClick={() => window.my_modal_1!.close()}
              type={"button"}
              className="btn-neutral btn"
            >
              Cancel
            </button>
          </div>
        </form>
      </dialog>
    </FormProvider>
  );
};

export default EditProfile;
