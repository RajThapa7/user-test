"use client";
import useFetchUser from "@/api/useFetchUser";
import Pagination from "@/components/Pagination";
import TableSkeletal from "@/components/TableSkeletal";
import { useState } from "react";

export default function Home() {
  const [pageNumber, setPageNumber] = useState(0);
  const { user, isLoading } = useFetchUser(pageNumber);

  return (
    <div className="p-10">
      <div className="font-sans overflow-x-auto mb-10">
        <table className="min-w-full bg-white">
          <thead className="bg-blue-400 whitespace-nowrap">
            <tr>
              <th className="p-4 text-left text-sm font-semibold text-white">
                ID
              </th>
              <th className="p-4 text-left text-sm font-semibold text-white">
                Full Name
              </th>
              <th className="p-4 text-left text-sm font-semibold text-white">
                Job Title
              </th>
              <th className="p-4 text-left text-sm font-semibold text-white">
                Email
              </th>
              <th className="p-4 text-left text-sm font-semibold text-white">
                Phone
              </th>
              <th className="p-4 text-left text-sm font-semibold text-white">
                Company
              </th>
            </tr>
          </thead>

          <tbody className="whitespace-nowrap">
            {isLoading && <TableSkeletal />}
            {!isLoading &&
              user.map(
                ({
                  Company,
                  Email,
                  EmailAddress,
                  FirstNameLastName,
                  ID,
                  JobTitle,
                  Phone,
                }) => (
                  <tr key={ID} className="hover:bg-gray-50">
                    <td className="p-4 text-[15px] text-gray-800">{ID}</td>
                    <td className="p-4 text-[15px] text-gray-800">
                      {FirstNameLastName}
                    </td>
                    <td className="p-4 text-[15px] text-gray-800">
                      {JobTitle}
                    </td>
                    <td className="p-4 text-[15px] text-gray-800">{Email}</td>
                    <td className="p-4 text-[15px] text-gray-800">{Phone}</td>
                    <td className="p-4 text-[15px] text-gray-800">{Company}</td>
                  </tr>
                )
              )}
          </tbody>
        </table>
      </div>

      <Pagination setActivePage={setPageNumber} activePage={pageNumber} />
    </div>
  );
}
