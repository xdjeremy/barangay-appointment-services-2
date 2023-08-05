import React, { FC } from "react";
import Image from "next/image";
import { NewsResponse } from "@/types/pocketbase-types";
import Link from "next/link";

interface Props {
  news: NewsResponse;
}

const BigNewsItem: FC<Props> = ({
                                    news
                                }) => {
    return (
        <Link href={`/news/${news.id}`} className={'w-full'}>
            {
                news.image ? (
                    <Image width={557} height={329} src={news.image} alt={''}/>
                ) : (
                    <div className={'w-full h-[329px] bg-white'}></div>
                )
            }
            <div className="text-black text-[40px] font-medium">{news.title}</div>
            <p className={'text-black text-base font-extralight'}>
                {news.content}
            </p>
        </Link>
    );
};

export default BigNewsItem;