import React, { FC } from "react";
import { UsersResponse } from "@/types/pocketbase-types";
import { format } from "date-fns";

interface Props {
  userData: UsersResponse | undefined;
}

const BasicInformation: FC<Props> = ({ userData }) => {
  return (
    <div className={"rounded-lg bg-zinc-100 px-10 py-6"}>
      <h3 className="text-xl font-bold text-gray-800">Basic Information</h3>
      <table className={"mt-6 table table-auto"}>
        <tbody>
          <tr>
            <td className="text-base font-semibold text-gray-800">
              Birthdate:
            </td>
            <td className="text-base font-extralight text-black">
              {userData?.birth_date &&
                format(new Date(userData?.birth_date), "MMMM dd, yyyy")}
            </td>
          </tr>
          <tr>
            <td className="text-base font-semibold text-gray-800">Gender:</td>
            <td className="text-base font-extralight capitalize text-black">
              {userData?.gender}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BasicInformation;
