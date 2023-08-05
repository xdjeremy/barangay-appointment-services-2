import React, { FC } from "react";
import { NewsResponse } from "@/types/pocketbase-types";
import { format } from "date-fns";

interface Props {
  data: NewsResponse;
}

const NewsIdHeader: FC<Props> = ({data}) => {
    return (
        <div className={"mt-14"}>
            <div className="h-6 w-[145px] text-[13px] font-normal text-black">
                LATEST NEWS
            </div>
            <h3 className="text-5xl font-extrabold text-black">
                {data.title}
            </h3>
            <span className="text-gray-600 text-[10px] font-normal">Posted at {
                format(new Date(data.created), 'MMMM dd, yyyy')
            }</span>
        </div>
  );
};

export default NewsIdHeader;
