"use client";
import React from "react";
import TicketHeader from "@/app/(dashboard)/ticket/components/ticket-header";
import TicketForm from "@/app/(dashboard)/ticket/components/ticket-form";

const Ticket = () => {
  return (
    <div>
      <TicketHeader />
      <TicketForm />
    </div>
  );
};

export default Ticket;
