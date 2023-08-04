"use client";
import React from "react";
import PageTitle from "@/app/(dashboard)/components/page-title";
import UserDetailsCard from "@/app/(dashboard)/archive/components/user-details-card";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { ArchiveSchema } from "@/app/(dashboard)/archive/components/archive-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import DocumentPickerCard from "@/app/(dashboard)/archive/components/document-picker-card";
import { DocumentRequestsRecord } from "@/types/pocketbase-types";
import { pocketbase } from "@/lib/utils/pocketbase";
import toast from "react-hot-toast";

const Archive = () => {
  const methods = useForm<z.infer<typeof ArchiveSchema>>({
    resolver: zodResolver(ArchiveSchema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof ArchiveSchema>> = async (
    input
  ) => {
    try {
      // check if user is logged in
      if (!pocketbase.authStore.isValid || !pocketbase.authStore.model) {
        return toast.error("You must be logged in to request a document");
      }

      const data: DocumentRequestsRecord = {
        document_type: input.documentType,
        user: pocketbase.authStore.model?.id,
        email: input.email,
        active: true,
        last_name: input.lastName,
        first_name: input.firstName,
        middle_name: input.middleName,
        address: input.address,
        birth_date: new Date(input.birthdate).toISOString(),
        contact_number: parseInt(input.contactNumber),
        purpose: input.purpose,
      };

      await pocketbase.collection("document_requests").create(data);

      toast.success("Document request sent");
    } catch (err: any) {
      toast.error(err.data.message);
    }
  };

  return (
    <div className={"pb-20"}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <PageTitle title={"Archive"} subtitle={"Request a document"} />
          <div className={"flex flex-row gap-5"}>
            <UserDetailsCard />
            <DocumentPickerCard />
            {/*<UserDetailsCard/>*/}
          </div>
          <button type={"submit"} className={"btn-neutral btn-wide btn mt-5"}>
            Confirm
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default Archive;
