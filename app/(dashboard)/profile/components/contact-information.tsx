import React, { FC } from "react";

const ContactInformation: FC = () => {
  return (
    <div className={"w-full rounded-lg bg-zinc-100 px-10 py-6"}>
      <h3 className="text-xl font-bold text-gray-800">Contact Information</h3>
      <table className={"mt-7 table w-fit table-auto"}>
        <tbody>
          <tr>
            <td className="text-base font-semibold text-gray-800">Phone:</td>
            <td className="text-base font-extralight text-black">
              +63 123 456 7890
            </td>
          </tr>
          <tr>
            <td className="text-base font-semibold text-gray-800">Email:</td>
            <td className="text-base font-extralight text-black">
              johndoe@example.com
            </td>
          </tr>
          <tr>
            <td className="text-base font-semibold text-gray-800">Username:</td>
            <td className="text-base font-extralight text-black">
              @john_doe12345
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
              538 san fernando st. binondo, Manila
            </td>
          </tr>
          <tr>
            <td className="text-base font-semibold text-gray-800">City:</td>
            <td className="text-base font-extralight text-black">Manila</td>
          </tr>
          <tr>
            <td className="text-base font-semibold text-gray-800">
              State/Province/Area:
            </td>
            <td className="text-base font-extralight text-black">
              Metro Manila
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContactInformation;
