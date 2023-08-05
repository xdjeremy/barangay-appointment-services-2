"use client";
import React, { FC } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface Props {
  value: any;
  onChange: any;
}

const CalendarCard: FC<Props> = ({ value, onChange }) => {
  return (
    <div className={"w-fit rounded-lg bg-zinc-100 px-10 py-16"}>
      <span className=" mb-8 text-2xl font-normal text-black">
        Select a date
      </span>

      <Calendar
        onChange={onChange}
        value={value}
        className={"rounded-lg bg-gray-50 text-black"}
      />
    </div>
  );
};

export default CalendarCard;
