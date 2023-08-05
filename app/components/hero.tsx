import React, { FC } from "react";

const Hero: FC = () => {
  return (
    <div className={"flex flex-col justify-between py-10"}>
      <div>
        <h1
          className={
            "flex flex-col text-[80px] font-black leading-[85px] text-gray-800"
          }
        >
          Barangay
          <br />
          Appointment
          <br />
          Services
        </h1>
        <h4 className="h-[43px] w-56 text-[30px] font-extralight text-black">
          Welcome back!
        </h4>
      </div>
      <div>
        <div className="h-[29px] w-[88px] text-[20px] font-extralight text-black">
          Contact
        </div>
        <div className="h-[29px] w-[452px] text-[20px] font-extralight text-black">
          bas@gmail.com | 123-4567
        </div>
      </div>
    </div>
  );
};

export default Hero;
