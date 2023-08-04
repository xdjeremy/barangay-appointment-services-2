import React from "react";
import { NextPage } from "next";
import NewsIdHeader from "@/app/(dashboard)/news/[id]/components/header";

const NewsId: NextPage = () => {
  return (
    <div>
      <NewsIdHeader title={"Lingkod Bayan Caravan"} />
    </div>
  );
};

export default NewsId;
