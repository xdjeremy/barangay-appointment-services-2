import React, { FC } from "react";
import { UsersResponse } from "@/types/pocketbase-types";

interface Props {
  userData: UsersResponse | undefined;
}

const ContactInformation: FC<Props> = ({ userData }) => {
  return (
    <div className={"w-full rounded-lg bg-zinc-100 px-10 py-6"}>
      <h3 className="text-xl font-bold text-gray-800">Contact Information</h3>
      <table className={"mt-7 table w-fit table-auto"}>
        <tbody>
          <tr>
            <td className="text-base font-semibold text-gray-800">Phone:</td>
            <td className="text-base font-extralight text-black">
              {userData?.phone}
            </td>
          </tr>
          <tr>
            <td className="text-base font-semibold text-gray-800">Email:</td>
            <td className="text-base font-extralight text-black">
              {userData?.email}
            </td>
          </tr>
          <tr>
            <td className="text-base font-semibold text-gray-800">Username:</td>
            <td className="text-base font-extralight text-black">
              {userData?.username}
            </td>
          </tr>
        </tbody>
      </table>

      <h3 className="mt-16 text-lg font-semibold text-gray-800">Address</h3>
      <table className={"mt-7 table w-fit table-auto"}>
        <tbody>
          <tr>
            <td className="text-base font-semibold text-gray-800">Street:</td>
            <td className="text-base font-extralight text-black">
              {userData?.street}
            </td>
          </tr>
          <tr>
            <td className="text-base font-semibold text-gray-800">City:</td>
            <td className="text-base font-extralight text-black">
              {userData?.city}
            </td>
          </tr>
          <tr>
            <td className="text-base font-semibold text-gray-800">
              State/Province/Area:
            </td>
            <td className="text-base font-extralight text-black">
              {userData?.province}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContactInformation;
