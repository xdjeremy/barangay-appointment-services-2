import React, { FC } from "react";
import Image from "next/image";
import { NewsResponse } from "@/types/pocketbase-types";
import Link from "next/link";
import { pocketbase } from "@/lib/utils/pocketbase";

interface Props {
  news: NewsResponse;
}

const SmallNewsItem: FC<Props> = ({ news }) => {
  const imageUrl = pocketbase.files.getUrl(news, news.image);
  return (
    <Link href={`/news/${news.id}`} className={"flex w-full flex-col"}>
      {news.image ? (
        <Image src={imageUrl} alt={""} height={209} width={400} />
      ) : (
        <div className={"h-[209px] w-full bg-white"}></div>
      )}
      <h2 className={"text-xl font-medium text-black"}>{news.title}</h2>
    </Link>
  );
};

export default SmallNewsItem;