"use client";
import React, { FC, useEffect } from "react";
import { DocumentRequestsResponse } from "@/types/pocketbase-types";
import useSWR, { useSWRConfig } from "swr";
import { pocketbase } from "@/lib/utils/pocketbase";
import { useRouter } from "next/navigation";
import { Admin } from "pocketbase";
import toast from "react-hot-toast";

interface TableRowProps {
  data: DocumentRequestsResponse;
}

const TableRow: FC<TableRowProps> = ({ data }) => {
  const { mutate } = useSWRConfig();
  const handleDelete = async () => {
    try {
      await pocketbase.collection("document_requests").delete(data.id);

      toast.success("Document Request Deleted");

      await mutate("/api/document-requests");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <tr className="border-b bg-white hover:bg-gray-50 ">
      <td className="px-6 py-4">
        {data.first_name} {data.last_name}
      </td>
      <td className="px-6 py-4">{data.document_type}</td>
      <td className="px-6 py-4">{data.email}</td>
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
              {data.first_name} {data.last_name} - {data.document_type}
            </h3>
            <p className="py-4">Email: {data.email}</p>
            <p className="">Requested Document: {data.document_type}</p>
            <div className={"mt-5 flex w-full flex-col items-end"}>
              <button onClick={handleDelete} className={"btn-error btn"}>
                Delete Request
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

const fetcher = async (): Promise<DocumentRequestsResponse[]> => {
  return pocketbase
    .collection("document_requests")
    .getFullList<DocumentRequestsResponse>();
};
const AdminArchive = () => {
  const { data } = useSWR("/api/document-requests", fetcher);

  const router = useRouter();

  useEffect(() => {
    if (!(pocketbase.authStore.model instanceof Admin)) {
      router.push("/news");
    }
  }, []);
  return (
    <div>
      <div className="text-[64px] font-black text-gray-800">Archives</div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 ">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Requested Document
              </th>
              <th scope="col" className="px-6 py-3">
                Email
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

export default AdminArchive;
