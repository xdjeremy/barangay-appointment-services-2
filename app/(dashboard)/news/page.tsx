import React from "react";
import PageTitle from "@/app/(dashboard)/components/page-title";
import BigNewsItem from "@/app/(dashboard)/news/components/big-news-item";
import SmallNewsItem from "@/app/(dashboard)/news/components/small-news-item";
import UpdateItem from "@/app/(dashboard)/news/components/update-item";
import { pocketbase } from "@/lib/utils/pocketbase";
import { NewsResponse } from "@/types/pocketbase-types";

const getNews = async (): Promise<NewsResponse[]> => {
  try {
    return await pocketbase.collection("news").getFullList<NewsResponse>({
      sort: "-created",
    });
  } catch (err: any) {
    return err;
  }
};

const News = async () => {
  const news = await getNews();

  return (
    <div>
      <PageTitle title={"News"} subtitle={"Daily News & updates"} />
      <div className={"flex flex-row items-start justify-between gap-10"}>
        {/* big news */}
        <div className={"flex w-full"}>
          <BigNewsItem news={news[0]} />
        </div>
        {/*  big news end  */}

        {/*  small news  */}
        <div className={"flex w-full flex-col items-center gap-4"}>
          <SmallNewsItem news={news[1]} />
          <SmallNewsItem news={news[2]} />
        </div>
        {/* small news end */}

        {/*  updates  */}
        <div className={"flex w-full flex-col"}>
          <h2 className={"z-10 bg-base-300 text-[40px] font-bold text-black"}>
            Updates
          </h2>
          <div
            className={
              "flex h-96 -translate-y-10 flex-col divide-y divide-solid divide-black overflow-auto"
            }
          >
            {news &&
              news.map((item) => {
                return <UpdateItem key={item.id} text={item.title || ""} />;
              })}
          </div>
        </div>
        {/*  updated end  */}
      </div>
    </div>
  );
};

export default News;
