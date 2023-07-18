import React, {FC} from 'react';
import Image from "next/image";

interface Props {
    title?: string;
    image?: string;
}

9
const SmallNewsItem: FC<Props> = ({title, image}) => {
    return (
        <div className={'flex flex-col w-full'}>
            {
                image ? (
                    <div className={'w-full'}>
                        <Image src={image} alt={''} fill={true}/>
                    </div>
                ) : (
                    <div className={'w-full h-[209px] bg-white'}></div>
                )
            }
            <h2 className={'text-black text-xl font-medium'}>
                {title}
            </h2>
        </div>
    );
};

export default SmallNewsItem;