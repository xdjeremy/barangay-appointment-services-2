import React, {FC} from 'react';

const PageTitle: FC = () => {
    return (
        <div className={'w-full text-center flex flex-col items-center justify-center mt-10 mb-16'}>
            <h1 className="text-gray-800 text-[96px] font-black leading-none">News</h1>
            <div className="w-[249px] h-[29px] text-black text-[24px] font-extralight">Daily News & updates</div>
        </div>
    );
};

export default PageTitle;