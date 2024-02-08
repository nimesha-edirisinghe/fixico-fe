import { CustomerDataI, TableHeaderI } from '@/interfaces/interfaces';
import Image from 'next/image';
import React from 'react';

// Define the props for the Table component
interface TablePropsI {
  data: CustomerDataI[]; // The array of customer data to be displayed in the table
  headers: TableHeaderI[]; // The array of table headers
}

// Table component declaration
const Table: React.FC<TablePropsI> = ({ data, headers }) => {
  return (
    <table
      className="w-full border border-gray-300 table-auto"
      id="report-table"
    >
      {/* Table header */}
      <thead id="report-table-head">
        <tr className="bg-gray-300">
          {/* Render each header cell */}
          {headers.map((header) => (
            <th key={header.key} className="px-4 py-2 text-gray-600">
              {header.label}
            </th>
          ))}
        </tr>
      </thead>
      {/* Table body */}
      <tbody>
        {/* Render each row of customer data */}
        {data.map((row, index) => (
          <tr key={index} className="text-gray-500 border border-gray-300">
            {/* Render the data for each column in the row */}
            <td className="px-4 py-2 no-underline ">{row.brand}</td>
            <td className="px-4 py-2 ">{row.modelName}</td>
            <td className="px-4 py-2 ">
              {/* Render the image if fileName exists in imageDetails */}
              {row.imageDetails.fileName && (
                <Image
                  src={`/images/${row.imageDetails.fileName}`}
                  alt="My Image"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              )}
            </td>
            <td className="px-4 py-2 ">{row.formData.name}</td>
            <td className="px-4 py-2 ">{row.formData.email}</td>
            <td className="px-4 py-2 ">{row.formData.address}</td>
            <td className="px-4 py-2 ">{row.imageDetails?.updatedDate}</td>
            <th className="px-4 py-2 text-green-400">Active</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
