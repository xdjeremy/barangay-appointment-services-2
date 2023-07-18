import React from 'react';

const NewsIdHeader = () => {
    return (
        <div className={'mx-auto mt-14 flex flex-col gap-2'}>
            <div className="text-black text-[13px] font-normal">LATEST NEWS</div>
            <div className="text-black text-5xl font-extrabold">Lingkod Bayan Caravan sa Barangay San Antonio</div>
            <div className="text-gray-600 text-[10px] font-normal">Posted at July 13, 2023 9:00 am</div>
        </div>
    );
};

export default NewsIdHeader;