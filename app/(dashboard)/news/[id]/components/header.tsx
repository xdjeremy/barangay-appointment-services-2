import React, { FC } from "react";

interface Props {
  title: string;
}

const NewsIdHeader: FC<Props> = ({ title }) => {
  return (
    <div>
      <div className="h-6 w-[145px] text-[13px] font-normal text-black">
        LATEST NEWS
      </div>
    </div>
  );
};

export default NewsIdHeader;
