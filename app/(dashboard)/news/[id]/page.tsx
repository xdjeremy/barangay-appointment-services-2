import React from "react";
import { NextPage } from "next";
import NewsIdHeader from "@/app/(dashboard)/news/[id]/components/header";
import { pocketbase } from "@/lib/utils/pocketbase";
import Image from "next/image";
import { NewsResponse } from "@/types/pocketbase-types";

const fetchNews = async (context: any) => {
  try {
    // get news id
    const id = context.params.id;

    return pocketbase.collection("news").getOne<NewsResponse>(id, {
      $autoCancel: false,
    });
  } catch (err: any) {
    return err;
  }
};
const NewsId: NextPage = async (context) => {
  const data: NewsResponse = await fetchNews(context);

  // console.log(data);
  // const url = pocketbase.files.getUrl(data, data)
  return (
    <div>
      <NewsIdHeader data={data} />
      {data.image ? (
        <>
          {/*<Image src={data.image} alt={data.image} width={895} height={425} />*/}
        </>
      ) : (
        <></>
      )}
      <Image src={data.image} alt={data.image} width={895} height={425} />
      <p className={"text-xl text-black"}>{data.content}</p>
    </div>
  );
};

export default NewsId;
