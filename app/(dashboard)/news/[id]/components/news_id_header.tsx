import React, {FC} from 'react';
import {NewsResponse} from "@/types/pocketbase-types";
import {format} from "date-fns";

interface Props {
    news: NewsResponse
}

const NewsIdHeader: FC<Props> = ({news}) => {
    const formattedDate = format(new Date(news.created), 'MMMM dd, yyyy hh:mm a');
    return (
        <div className={'mx-auto mt-14 flex flex-col gap-2'}>
            <div className="text-black text-[13px] font-normal">LATEST NEWS</div>
            <div className="text-black text-5xl font-extrabold">{news.title}</div>
            <div className="text-gray-600 text-[10px] font-normal">Posted at {formattedDate}</div>
        </div>
    );
};

export default NewsIdHeader;