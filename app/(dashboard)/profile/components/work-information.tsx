import React, { FC } from "react";
import { UsersResponse } from "@/types/pocketbase-types";

interface Props {
  userData: UsersResponse | undefined;
}

const WorkInformation: FC<Props> = ({ userData }) => {
  return (
    <div className={"rounded-lg bg-zinc-100 px-10 py-6"}>
      <h3 className="text-xl font-bold text-gray-800">Work</h3>
      <table className={"mt-6 table table-auto"}>
        <tbody>
          <tr>
            <td className="text-base font-semibold text-gray-800">Works at:</td>
            <td className={"flex flex-col"}>
              <span className="text-base font-extralight capitalize text-black">
                {userData?.work}
              </span>
            </td>
          </tr>
          <tr>
            <td className="text-base font-semibold text-gray-800">Phone:</td>
            <td className="text-base font-extralight text-black">
              {userData?.work_phone}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WorkInformation;
