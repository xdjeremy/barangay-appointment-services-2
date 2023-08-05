"use client";
import React, { FC } from "react";
import { pocketbase } from "@/lib/utils/pocketbase";
import useSWR from "swr";
import {
  AppointmentsAppointmentTimeOptions,
  AppointmentsRecord,
} from "@/types/pocketbase-types";
import toast from "react-hot-toast";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface ScheduleItemProps {
  time: string;
  name: string;
  position: string;
  date: Value;
  value: AppointmentsAppointmentTimeOptions;
  appointmentData: AppointmentsRecord[] | undefined;
}

const ScheduleItem: FC<ScheduleItemProps> = ({
  time,
  name,
  position,
  date,
  value,
  appointmentData,
}) => {
  const bookHandler = async () => {
    try {
      const userId = pocketbase.authStore.model?.id;
      if (!userId || !pocketbase.authStore.isValid) {
        return toast.error("You must be logged in to book an appointment");
      }

      if (!date) {
        return toast.error("Please select a date");
      }

      // remove time from this Sat Aug 05 2023 21:10:43 GMT+0800 (China Standard Time)}
      const formatDate = new Date(date.toString()).toDateString();

      const data: AppointmentsRecord = {
        user: userId,
        active: true,
        appointment_time: value,
        barangay_official: name,
        appointment_date: formatDate,
      };

      await pocketbase.collection("appointments").create(data);

      toast.success("Appointment booked successfully");

      // refresh page
      window.location.reload();
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  if (!appointmentData) {
    return null;
  }
  const isBooked = appointmentData.some((appointment) => {
    return appointment.appointment_time === value;
  });

  return (
    <div
      className={
        "flex flex-row items-center justify-between gap-4 bg-gray-50 px-7 py-3 shadow-xl"
      }
    >
      <div className={"flex flex-row items-center gap-5"}>
        <span className="text-center text-xl font-medium text-black">
          {time}
        </span>
        <div className={"flex flex-col items-start"}>
          <div className="text-2xl font-medium text-black">{name}</div>
          <div className="text-[15px] font-extralight text-black">
            {position}
          </div>
        </div>
      </div>
      <button
        disabled={isBooked}
        onClick={bookHandler}
        className={"btn-success btn uppercase"}
      >
        book
      </button>
    </div>
  );
};

interface Props {
  date: Value;
}

const fetcher = async (date: string): Promise<AppointmentsRecord[]> => {
  return await pocketbase
    .collection("appointments")
    .getFullList<AppointmentsRecord>({
      filter: `appointment_date = '${date}'`,
      $autoCancel: false,
    });
};
const Schedule: FC<Props> = ({ date }) => {
  const formatDate = date
    ? new Date(date.toString()).toDateString()
    : new Date().toDateString();
  const { data } = useSWR<AppointmentsRecord[]>([formatDate], fetcher);

  return (
    <div className={"rounded-lg bg-zinc-100 px-10 pb-12 pt-7"}>
      <div className="text-[32px] font-semibold text-black">TODAY</div>
      <div className={"grid grid-cols-1 gap-4"}>
        <ScheduleItem
          time={"10:00 AM"}
          date={date}
          appointmentData={data}
          name={"Ruth Esther Torrente-Ancheta"}
          position={"Barangay Captain"}
          value={AppointmentsAppointmentTimeOptions.TEN_AM}
        />
        <ScheduleItem
          time={"1:00 PM"}
          date={date}
          appointmentData={data}
          name={"Jasper M. Angeles"}
          position={"SK Chairman"}
          value={AppointmentsAppointmentTimeOptions.ONE_PM}
        />
        <ScheduleItem
          time={"2:00 PM"}
          date={date}
          appointmentData={data}
          name={"Maricel A. Lejas"}
          position={"Barangay Captain"}
          value={AppointmentsAppointmentTimeOptions.TWO_PM}
        />
        <ScheduleItem
          time={"3:00 PM"}
          date={date}
          appointmentData={data}
          name={"Arcya Syren B. Bolano"}
          position={"Secretary"}
          value={AppointmentsAppointmentTimeOptions.THREE_PM}
        />
        <ScheduleItem
          time={"4:00 PM"}
          date={date}
          appointmentData={data}
          name={"Eduardo V. Arinal"}
          position={"Treasurer"}
          value={AppointmentsAppointmentTimeOptions.FOUR_PM}
        />
      </div>
    </div>
  );
};

export default Schedule;
