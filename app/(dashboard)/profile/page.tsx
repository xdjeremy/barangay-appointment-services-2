import React from "react";
import ProfileHeader from "@/app/(dashboard)/profile/components/profile-header";
import BasicInformation from "@/app/(dashboard)/profile/components/basic-information";
import WorkInformation from "@/app/(dashboard)/profile/components/work-information";
import ContactInformation from "@/app/(dashboard)/profile/components/contact-information";

const Profile = () => {
  return (
    <div>
      <ProfileHeader />
      <div className={"mt-32 flex flex-row gap-5"}>
        <div className={"flex flex-col gap-6"}>
          <BasicInformation />
          <WorkInformation />
        </div>
        <ContactInformation />
      </div>
    </div>
  );
};

export default Profile;
