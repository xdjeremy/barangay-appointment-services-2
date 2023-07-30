import React, { FC } from "react";

const DocumentPickerCard: FC = () => {
  return (
    <div className={"w-full rounded-2xl bg-zinc-100 px-6 pb-28 pt-20"}>
      <div className="text-4xl font-black leading-[38px] text-gray-800">
        What type of document do you need?
      </div>
      <div className={"flex flex-col gap-1.5"}>
        <div className={"flex flex-row gap-1.5"}>
          <div className={"w-full"}>
            <button className="btn-neutral btn-block btn">Postal ID</button>
          </div>
          <div className={"w-full"}>
            <button className="btn-neutral btn-block btn">Barangay ID</button>
          </div>
        </div>
        <div className={"flex flex-row gap-1.5"}>
          <div className={"w-full"}>
            <button className="btn-neutral btn-block btn">
              Birth Certificate
            </button>
          </div>
          <div className={"w-full"}>
            <button className="btn-neutral btn-block btn">Voter's ID</button>
          </div>
        </div>
        <button className="btn-neutral btn-block btn">
          Barangay Clearance
        </button>
        <button className="btn-neutral btn-block btn">
          Business Clearance
        </button>
      </div>
      <div className="form-control mt-6">
        <label className="label">
          <span className="label-text">State your purpose</span>
        </label>
        <textarea className="textarea-bordered textarea h-40 text-black"></textarea>
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
