import React, { FC } from "react";
import Image from "next/image";
import { NewsResponse } from "@/types/pocketbase-types";
import Link from "next/link";

interface Props {
  news: NewsResponse;
}

9;
const SmallNewsItem: FC<Props> = ({ news }) => {
  return (
    <Link href={`/news/${news.id}`} className={"flex w-full flex-col"}>
      {news.image ? (
        <div className={"w-full"}>
          <Image src={news.image} alt={""} fill={true} />
        </div>
      ) : (
        <div className={"h-[209px] w-full bg-white"}></div>
      )}
      <h2 className={"text-xl font-medium text-black"}>{news.title}</h2>
    </Link>
  );
};

export default SmallNewsItem;