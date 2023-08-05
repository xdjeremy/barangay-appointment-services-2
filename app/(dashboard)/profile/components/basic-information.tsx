import React, { FC } from "react";

const BasicInformation: FC = () => {
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
              January 26, 1995
            </td>
          </tr>
          <tr>
            <td className="text-base font-semibold text-gray-800">Gender:</td>
            <td className="text-base font-extralight text-black">Female</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BasicInformation;
