"use client";
import React, { useEffect } from "react";
import TicketHeader from "@/app/(dashboard)/ticket/components/ticket-header";
import TicketForm from "@/app/(dashboard)/ticket/components/ticket-form";
import { useRouter } from "next/navigation";
import { pocketbase } from "@/lib/utils/pocketbase";

const Ticket = () => {
  const router = useRouter();
  useEffect(() => {
    if (!pocketbase.authStore.isValid) {
      router.push("/login");
    }
  });

  return (
    <div>
      <TicketHeader />
      <TicketForm />
    </div>
  );
};

export default Ticket;
