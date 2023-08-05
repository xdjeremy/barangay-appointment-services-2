"use client";
import React, { useState } from "react";
import AppointmentsHeader from "@/app/(dashboard)/appointments/components/appointments-header";
import CalendarCard from "@/app/(dashboard)/appointments/components/calendar";
import Schedule from "@/app/(dashboard)/appointments/components/schedule";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
const Appointments = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className={"mx-auto w-full max-w-6xl"}>
      <AppointmentsHeader />
      <div className={"flex flex-row gap-6"}>
        <CalendarCard value={value} onChange={onChange} />
        <Schedule date={value} />
      </div>
    </div>
  );
};

export default Appointments;
