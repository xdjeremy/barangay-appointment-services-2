import React, {FC, ReactNode} from "react";
import Navbar from "@/app/(dashboard)/components/navbar";

interface Props {
    children: ReactNode;
}

const DashboardLayout: FC<Props> = ({children}) => {
    return (
        <div className={'bg-base-300 min-h-screen'}>
            <Navbar/>
            <div className={'px-20'}>
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;
