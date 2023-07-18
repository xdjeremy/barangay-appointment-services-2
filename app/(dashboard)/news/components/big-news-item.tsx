import React, {FC} from 'react';
import Image from "next/image";

interface Props {
    title?: string;
    content?: string;
    image?: string;
}

const BigNewsItem: FC<Props> = ({
                                    title="Undefined News", content, image
                                }) => {
    return (
        <div className={'w-full'}>
            {
                image ? (
                    <Image width={557} height={329} src={image} alt={''} />
                ) : (
                    <div className={'w-full h-[329px] bg-white'}></div>
                )
            }
            <div className="text-black text-[40px] font-medium">{title}</div>
            <p className={'text-black text-base font-extralight'}>
                {content}
            </p>
        </div>
    );
};

export default BigNewsItem;