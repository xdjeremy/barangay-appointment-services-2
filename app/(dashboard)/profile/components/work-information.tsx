import React, { FC } from "react";

const WorkInformation: FC = () => {
  return (
    <div className={"rounded-lg bg-zinc-100 px-10 py-6"}>
      <h3 className="text-xl font-bold text-gray-800">Work</h3>
      <table className={"mt-6 table table-auto"}>
        <tbody>
          <tr>
            <td className="text-base font-semibold text-gray-800">Works at:</td>
            <td className={"flex flex-col"}>
              <span className="text-base font-extralight text-black">
                Accenture Philippines
              </span>
              <span className="text-[10px] font-extralight text-black">
                6813 Ayala Avenue cor. H. V. Dela Costa St 30/F GT Tower,
                Makati, 1227 Metro Manila
              </span>
            </td>
          </tr>
          <tr>
            <td className="text-base font-semibold text-gray-800">Phone:</td>
            <td className="text-base font-extralight text-black">25805888</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WorkInformation;
