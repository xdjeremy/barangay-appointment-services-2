"use client";
import React from "react";
import ProfileHeader from "@/app/(dashboard)/profile/components/profile-header";
import BasicInformation from "@/app/(dashboard)/profile/components/basic-information";
import WorkInformation from "@/app/(dashboard)/profile/components/work-information";
import ContactInformation from "@/app/(dashboard)/profile/components/contact-information";
import { Pen } from "lucide-react";
import EditProfile from "@/app/(dashboard)/profile/components/edit-profile";
import useSWR from "swr";
import { pocketbase } from "@/lib/utils/pocketbase";
import { UsersResponse } from "@/types/pocketbase-types";

const fetcher = async (): Promise<UsersResponse> => {
  const user = pocketbase.authStore.model?.id;
  if (!user) throw new Error("User not found");
  return await pocketbase.collection("users").getOne(user);
};
const Profile = () => {
  const { data, error } = useSWR<UsersResponse>("/api/user", fetcher);

  return (
    <div>
      <ProfileHeader />
      <div className={"mt-8 flex w-full flex-col items-end justify-end"}>
        <button
          className="btn-neutral btn"
          // @ts-ignore
          onClick={() => window.my_modal_1!.showModal()}
        >
          <Pen />
          Edit profile
        </button>
      </div>
      <div className={"mt-14 flex flex-row gap-5"}>
        <div className={"flex flex-col gap-6"}>
          <BasicInformation userData={data} />
          <WorkInformation userData={data} />
        </div>
        <ContactInformation userData={data} />
      </div>
      <EditProfile />
    </div>
  );
};

export default Profile;
