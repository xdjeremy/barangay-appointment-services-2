import React, { FC } from "react";
import Image from "next/image";
import { NewsResponse } from "@/types/pocketbase-types";
import Link from "next/link";
import { pocketbase } from "@/lib/utils/pocketbase";

interface Props {
  news: NewsResponse;
}

const BigNewsItem: FC<Props> = ({ news }) => {
  const imageUrl = pocketbase.files.getUrl(news, news.image);
  return (
    <Link href={`/news/${news.id}`} className={"w-full"}>
      {news.image ? (
        <Image width={557} height={329} src={imageUrl} alt={""} />
      ) : (
        <div className={"h-[329px] w-full bg-white"}></div>
      )}
      <div className="text-[40px] font-medium text-black">{news.title}</div>
      <p className={"h-10 text-base font-extralight text-black"}>
        {news.content}
      </p>
    </Link>
  );
};

export default BigNewsItem;