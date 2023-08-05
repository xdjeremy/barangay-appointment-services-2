"use client";
import React, { FC } from "react";
import { DocumentRequestsRecord } from "@/types/pocketbase-types";
import useSWR from "swr";
import { pocketbase } from "@/lib/utils/pocketbase";
import { useRouter } from "next/navigation";
import { Admin } from "pocketbase";

interface TableRowProps {
  data: DocumentRequestsRecord;
}

const TableRow: FC<TableRowProps> = ({ data }) => {
  return (
    <tr className="border-b bg-white  hover:bg-gray-50 ">
      <td className="px-6 py-4">
        {data.first_name} {data.last_name}
      </td>
      <td className="px-6 py-4">{data.document_type}</td>
      <td className="px-6 py-4">{data.email}</td>
    </tr>
  );
};

const fetcher = (): Promise<DocumentRequestsRecord[]> => {
  return pocketbase
    .collection("document_requests")
    .getFullList<DocumentRequestsRecord>();
};
const AdminArchive = () => {
  const { data } = useSWR("/api/document-requests", fetcher);

  const router = useRouter();
  // check if user is admin
  // if (!pocketbase.authStore.model)
  if (!(pocketbase.authStore.model instanceof Admin)) {
    router.push("/news");
  }
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
