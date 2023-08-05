"use client";
import React, { FC, useEffect } from "react";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import { pocketbase } from "@/lib/utils/pocketbase";
import { Admin } from "pocketbase";
import { TicketsResponse, UsersResponse } from "@/types/pocketbase-types";
import { format } from "date-fns";

type TExpand = {
  user: UsersResponse;
};

interface TableRowProps {
  data: TicketsResponse<TExpand>;
}

const TableRow: FC<TableRowProps> = ({ data }) => {
  return (
    <tr className="border-b bg-white  hover:bg-gray-50 ">
      <td className="px-6 py-4">{data.purpose}</td>
      <td className="px-6 py-4">{data.expand?.user.name}</td>
      <td className="px-6 py-4">
        {format(new Date(data.created), "MMMM dd yyyy")}
      </td>
    </tr>
  );
};

const fetcher = async (): Promise<TicketsResponse<TExpand>[]> => {
  return pocketbase
    .collection("tickets")
    .getFullList<TicketsResponse<TExpand>>({
      expand: "user",
    });
};
const AdminTickets = () => {
  const { data } = useSWR("/api/document-requests", fetcher);

  console.log(data);
  const router = useRouter();

  useEffect(() => {
    if (!(pocketbase.authStore.model instanceof Admin)) {
      router.push("/news");
    }
  }, []);
  return (
    <div>
      <div className="text-[64px] font-black text-gray-800">Concerns</div>

      <div className="relative mt-8 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 ">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                Feedback
              </th>
              <th scope="col" className="px-6 py-3">
                Citizen Name
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <TableRow data={item} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTickets;
