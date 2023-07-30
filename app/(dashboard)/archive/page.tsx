"use client";
import React from "react";
import PageTitle from "@/app/(dashboard)/components/page-title";
import UserDetailsCard from "@/app/(dashboard)/archive/components/user-details-card";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { ArchiveSchema } from "@/app/(dashboard)/archive/components/archive-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import DocumentPickerCard from "@/app/(dashboard)/archive/components/document-picker-card";

const Archive = () => {
  const methods = useForm<z.infer<typeof ArchiveSchema>>({
    resolver: zodResolver(ArchiveSchema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof ArchiveSchema>> = (input) => {
    try {
      console.log(methods.formState.errors);
      console.log("entry");
      console.log(input);
    } catch (err: any) {
      console.log(err);
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