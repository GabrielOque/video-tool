import TableRow from "../components/TableRow";
import Input from "../components/Input";
import data from "../mock/mock.json";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const Videos = () => {
  const [inputvalue, setInputValue] = useState("");
  const { name } = useParams();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <section className="h-full w-[83%] bg-white rounded-xl p-10">
      <div className="text-2xl flex h-[52px]">
        <i
          className="fa-solid fa-arrow-left bg-primary text-center p-2 text-white rounded-lg mr-2 h-[40px] cursor-pointer"
          onClick={handleNavigate}
        />
        <p>
          Home
          <span className="font-bold"> / {name}</span>
        </p>
      </div>
      <Input
        placeholder={"Buscar video"}
        setInputValue={setInputValue}
        inputValue={inputvalue}
      />
      <table className="mt-10 w-full table-fixed">
        <thead>
          <tr>
            <td className="px-4 py-2 text-left">
              <input type="checkbox" />
            </td>
            <th className="w-3/12 px-4 py-2 text-left">Nombre</th>
            <th className="w-2/12 px-4 py-2 text-right">Tamaño</th>
            <th className="w-3/12 px-4 py-2 text-right">Duración</th>
            <th className="w-3/12 px-4 py-2 text-right">Última modificación</th>
          </tr>
        </thead>
        <tbody>
          {data.videos
            .filter((video) =>
              video.name
                .toLocaleLowerCase()
                .includes(inputvalue.toLocaleLowerCase())
            )
            .map((video) => (
              <TableRow
                key={video.id}
                row={video}
                icon={"fa-regular fa-circle-play text-primary mr-2 text-xl"}
              />
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default Videos;
