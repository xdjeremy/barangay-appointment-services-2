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
    const news = await getNews(id)
    console.log(news);
    return (
        <div className={'w-full max-w-4xl mx-auto'}>
            <NewsIdHeader/>
            <div className={'w-full h-[420px] mt-3'}>
                {
                    news.image ? (
                        <Image src={news.image} alt={news.image}/>
                    ) : (
                        <div className={'bg-white w-full h-full'}></div>
                    )
                }
            </div>
            <div className="text-gray-600 text-[10px] font-normal mt-2">Mayor Abby and Vice Mayor Monique Lagdameo at the Lingkod Bayan Caravan in Barangay San Antonio</div>
            <p className={'text-black text-xl font-normal mt-8'}>
                Binisita ni Mayora Abby, Vice Mayor Monique Lagdameo, Congressman Luis Campos at Congressman Kid Peña ang #ProudMakatizens ng San Antonio sa ginanap na Lingkod Bayan Caravan. Abangan ang schedule ng caravan sa inyong barangay!
                Binisita ni Mayora Abby, Vice Mayor Monique Lagdameo, Congressman Luis Campos at Congressman Kid Peña ang #ProudMakatizens ng San Antonio sa ginanap na Lingkod Bayan Caravan. Abangan ang schedule ng caravan sa inyong barangay!
                Binisita ni Mayora Abby, Vice Mayor Monique Lagdameo, Congressman Luis Campos at Congressman Kid Peña ang #ProudMakatizens ng San Antonio sa ginanap na Lingkod Bayan Caravan. Abangan ang schedule ng caravan sa inyong barangay!
            </p>
        </div>
    );
};

export default NewsId;