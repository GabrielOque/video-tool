import React from "react";
import { Link } from "react-router-dom";
const TableRow = ({ row, icon }) => {
  return (
    <tr className="border-b-[2px] cursor-pointer hover:bg-secondary border-solid border-secondary">
      <td className="px-4 py-2">
        <input type="checkbox" />
      </td>
      <td className="px-4 py-2 text-left">
        <Link to={`/videos/${row.name}`}>
          <i className={icon} />
          {row.name}
        </Link>
      </td>
      <td className="px-4 py-2 text-right">{row.videos}</td>
      <td className="px-4 py-2 text-right">{row.size}</td>
      <td className="italic px-4 py-2 text-right">{row.lastModification}</td>
    </tr>
  );
};

export default TableRow;
