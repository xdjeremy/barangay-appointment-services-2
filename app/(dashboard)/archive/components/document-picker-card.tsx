import React, { FC } from "react";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import { ArchiveSchema } from "@/app/(dashboard)/archive/components/archive-schema";
import { DocumentRequestsDocumentTypeOptions } from "@/types/pocketbase-types";

const DocumentPickerCard: FC = () => {
  const { register } = useFormContext<z.infer<typeof ArchiveSchema>>();

  return (
    <div className={"w-full rounded-2xl bg-zinc-100 px-6 pb-28 pt-20"}>
      <div className="text-4xl font-black leading-[38px] text-gray-800">
        What type of document do you need?
      </div>
      <div className={"mt-5 flex flex-col gap-1.5"}>
        <div className={"flex flex-row gap-1.5"}>
          <div className={"w-full"}>
            <input
              {...register("documentType")}
              id={"postal_id"}
              type={"radio"}
              value={DocumentRequestsDocumentTypeOptions.postal_id}
              className="peer hidden"
            />
            <label
              htmlFor={"postal_id"}
              className={"btn-neutral btn-block btn peer-checked:btn-outline"}
            >
              Postal ID
            </label>
          </div>
          <div className={"w-full"}>
            <input
              {...register("documentType")}
              id={"barangay_id"}
              type={"radio"}
              value={DocumentRequestsDocumentTypeOptions.barangay_id}
              className="peer hidden"
            />
            <label
              htmlFor={"barangay_id"}
              className={"btn-neutral btn-block btn peer-checked:btn-outline"}
            >
              Barangay ID
            </label>
          </div>
        </div>
        <div className={"flex flex-row gap-1.5"}>
          <div className={"w-full"}>
            <input
              {...register("documentType")}
              id={"birth_certificate"}
              type={"radio"}
              value={DocumentRequestsDocumentTypeOptions.birth_certificate}
              className="peer hidden"
            />
            <label
              htmlFor={"birth_certificate"}
              className={"btn-neutral btn-block btn peer-checked:btn-outline"}
            >
              Birth Certificate
            </label>
          </div>
          <div className={"w-full"}>
            <input
              {...register("documentType")}
              id={"voters_id"}
              type={"radio"}
              value={DocumentRequestsDocumentTypeOptions.voters_id}
              className="peer hidden"
            />
            <label
              htmlFor={"voters_id"}
              className={"btn-neutral btn-block btn peer-checked:btn-outline"}
            >
              Voter's ID
            </label>
          </div>
        </div>
        <div>
          <input
            {...register("documentType")}
            id={"barangay_clearance"}
            type={"radio"}
            value={DocumentRequestsDocumentTypeOptions.barangay_clearance}
            className="peer hidden"
          />
          <label
            htmlFor={"barangay_clearance"}
            className={"btn-neutral btn-block btn peer-checked:btn-outline"}
          >
            Barangay Clearance
          </label>
        </div>
        <div>
          <input
            {...register("documentType")}
            id={"business_clearance"}
            type={"radio"}
            value={DocumentRequestsDocumentTypeOptions.business_clearance}
            className={"peer hidden"}
          />
          <label
            htmlFor={"business_clearance"}
            className={"btn-neutral btn-block btn peer-checked:btn-outline"}
          >
            Business Clearance
          </label>
        </div>
      </div>
      <div className="form-control mt-6">
        <label className="label">
          <span className="label-text">State your purpose</span>
        </label>
        <textarea
          {...register("purpose")}
          className="textarea-bordered textarea h-40 text-black"
        ></textarea>
      </div>
      <div className={"mx-auto flex flex-col items-center"}>
        <button type={"submit"} className={"btn-neutral btn-wide btn mt-5"}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default DocumentPickerCard;
