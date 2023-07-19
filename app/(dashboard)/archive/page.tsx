import React from 'react';
import PageTitle from "@/app/(dashboard)/components/page-title";
import UserDetailsCard from "@/app/(dashboard)/archive/components/user-details-card";

const Archive = () => {
    return (
        <div className={'pb-20'}>
            <PageTitle title={'Archive'} subtitle={'Request a document'} />
            <div className={'flex flex-row gap-5'}>
                <UserDetailsCard />
                <UserDetailsCard />
                <UserDetailsCard />
            </div>
        </div>
    );
};

export default Archive;