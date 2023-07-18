import React from 'react';
import NewsIdHeader from "@/app/(dashboard)/news/[id]/components/news_id_header";
import Image from "next/image";
import {pocketbase} from "@/lib/utils/pocketbase";
import {NewsResponse} from "@/types/pocketbase-types";

const getNews = async (id: string) => {
    try {
        return pocketbase.collection('news').getOne<NewsResponse>(id);
    } catch (err: any) {
        return err.data.message;
    }
}
const NewsId = async ({params: {id}}: {
    params: { id: string }
}) => {
    const news: NewsResponse = await getNews(id)

    let imageUrl;
    if (news.image) {
        imageUrl = pocketbase.files.getUrl(news, news.image);
    }
    return (
        <div className={'w-full max-w-4xl mx-auto pb-20'}>
            <NewsIdHeader news={news}/>
            <div className={'w-full h-[420px] mt-3 relative'}>
                {
                    imageUrl ? (
                        <Image src={imageUrl} alt={news.image || ''} fill={true}/>
                    ) : (
                        <div className={'bg-white w-full h-full'}></div>
                    )
                }
            </div>
            <div className="text-gray-600 text-[10px] font-normal mt-2">{news.image}</div>
            <p className={'text-black text-xl font-normal mt-8'}>
                {
                    news.content
                }
            </p>
        </div>
    );
};

export default NewsId;