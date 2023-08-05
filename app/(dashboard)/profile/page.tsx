"use client";
import React from "react";
import ProfileHeader from "@/app/(dashboard)/profile/components/profile-header";
import BasicInformation from "@/app/(dashboard)/profile/components/basic-information";
import WorkInformation from "@/app/(dashboard)/profile/components/work-information";
import ContactInformation from "@/app/(dashboard)/profile/components/contact-information";
import { Pen } from "lucide-react";
import EditProfile from "@/app/(dashboard)/profile/components/edit-profile";

const Profile = () => {
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
          <BasicInformation />
          <WorkInformation />
        </div>
        <ContactInformation />
      </div>
      <EditProfile />
    </div>
  );
};

export default Profile;
