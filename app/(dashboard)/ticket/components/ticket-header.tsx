import React, { FC } from "react";

const TicketHeader: FC = () => {
  return (
    <div className={"mt-16 flex flex-col gap-2.5"}>
      <div className="text-[64px] font-black text-gray-800">
        Submit a ticket
      </div>
      <div className="text-2xl font-extralight text-black">
        Tell us your feedback
      </div>
    </div>
  );
};

export default TicketHeader;
