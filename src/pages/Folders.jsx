import React, { useState } from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import TableRow from "../components/TableRow";
import data from "../mock/mock.json";
const Folders = () => {
  const [inputvalue, setInputValue] = useState("");
  return (
    <div className="h-full w-[83%] bg-white rounded-xl p-10">
      <Header />
      <Input
        placeholder={"Buscar carpeta"}
        setInputValue={setInputValue}
        inputValue={inputvalue}
      />
      <table className="mt-10 w-full table-fixed">
        <thead>
          <tr>
            <td className="px-4 py-2">
              <input type="checkbox" />
            </td>
            <th className="w-3/12 px-4 py-2 text-left">Nombre</th>
            <th className="w-2/12 px-4 py-2 text-right">Videos</th>
            <th className="w-3/12 px-4 py-2 text-right">Tamaño</th>
            <th className="w-3/12 px-4 py-2 text-right">Última modificación</th>
          </tr>
        </thead>
        <tbody>
          {data.folders
            .filter((folder) =>
              folder.name
                .toLocaleLowerCase()
                .includes(inputvalue.toLocaleLowerCase())
            )
            .map((folder) => (
              <TableRow
                key={folder.id}
                row={folder}
                icon={"fa-regular fa-folder text-primary mr-2 text-xl"}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Folders;
