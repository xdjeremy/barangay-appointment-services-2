"use client";
import React, { FC, useEffect } from "react";
import useSWR, { useSWRConfig } from "swr";
import { useRouter } from "next/navigation";
import { pocketbase } from "@/lib/utils/pocketbase";
import { Admin } from "pocketbase";
import { TicketsResponse, UsersResponse } from "@/types/pocketbase-types";
import { format } from "date-fns";
import toast from "react-hot-toast";

type TExpand = {
  user: UsersResponse;
};

interface TableRowProps {
  data: TicketsResponse<TExpand>;
}

const TableRow: FC<TableRowProps> = ({ data }) => {
  const { mutate } = useSWRConfig();
  const handleDelete = async () => {
    try {
      await pocketbase.collection("tickets").delete(data.id);

      toast.success("Ticket Deleted");

      await mutate("/api/document-requests");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <tr className="border-b bg-white  hover:bg-gray-50 ">
      <td className="px-6 py-4">{data.purpose}</td>
      <td className="px-6 py-4">{data.expand?.user?.name || ""}</td>
      <td className="px-6 py-4">
        {format(new Date(data.created), "MMMM dd yyyy")}
      </td>
      <td>
        <button
          // @ts-ignore
          onClick={() => window[data.id].showModal()}
          className={"btn-neutral btn"}
        >
          Manage
        </button>
        <dialog id={data.id} className="modal">
          <form method="dialog" className="modal-box">
            <h3 className="text-lg font-bold">
              {data.firstName} {data.lastName} - {data.purpose}
            </h3>
            <p className="py-4">Email: {data.email}</p>
            <p className="">Purpose: {data.purpose}</p>
            <p>Body: {data.body}</p>
            <div className={"mt-5 flex w-full flex-col items-end"}>
              <button onClick={handleDelete} className={"btn-error btn"}>
                Delete Ticket
              </button>
            </div>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
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
              <th scope="col" className="px-6 py-3">
                Edit
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
