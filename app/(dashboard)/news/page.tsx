import React from "react";
import PageTitle from "@/app/(dashboard)/components/page-title";
import BigNewsItem from "@/app/(dashboard)/news/components/big-news-item";
import SmallNewsItem from "@/app/(dashboard)/news/components/small-news-item";
import UpdateItem from "@/app/(dashboard)/news/components/update-item";
import {pocketbase} from "@/lib/utils/pocketbase";
import {NewsResponse} from "@/types/pocketbase-types";

const getNews = async (): Promise<NewsResponse[]> => {
    try {
        return await pocketbase.collection('news').getFullList<NewsResponse>({
            sort: '-created'
        })
    } catch (err: any) {
        return err;
    }
}

const News = async () => {
    const news = await getNews();


    return (
        <div>
            <PageTitle/>
            <div className={'flex flex-row items-start justify-between gap-10'}>

                {/* big news */}
                <div className={'flex w-full'}>
                    <BigNewsItem title={news[0].title}
                                 content={news[0].content}/>
                </div>
                {/*  big news end  */}

                {/*  small news  */}
                <div className={'flex flex-col w-full items-center gap-4'}>
                    <SmallNewsItem title={news[1].title}/>
                    <SmallNewsItem title={news[2].title}/>
                </div>
                {/* small news end */}

                {/*  updates  */}
                <div className={'flex flex-col w-full'}>
                    <h2 className={'text-black text-[40px] font-bold bg-base-300 z-10'}>
                        Updates
                    </h2>
                    <div className={'flex flex-col h-96 overflow-auto divide-black divide-y divide-solid -translate-y-10'}>
                        {
                            news.map((item) => {
                                return (
                                    <UpdateItem key={item.id} text={item.title || ''}/>
                                )
                            })
                        }
                    </div>
                </div>
                {/*  updated end  */}
            </div>
        </div>
    );
};

export default News;
