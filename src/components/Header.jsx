import React from "react";

const Header = () => {
  return (
    <header className="w-full text-xl">
      <nav className=" flex justify-between">
        <ul className="flex">
          <li className="text-primary mr-7">
            <button className="flex items-center border-b-[3px] border-solid border-primary">
              <i className="fa-solid fa-photo-film mr-2" />
              Biblioteca
            </button>
          </li>
          <li>
            <button className="flex items-center">
              <i className="fa-regular fa-trash-can mr-2" />
              Papelera
            </button>
          </li>
        </ul>
        <ul className="flex">
          <li className="mr-4">
            <button className="flex items-center bg-secondary py-3 px-5 rounded-lg">
              <i className="fa-regular fa-folder mr-2" />
              Nueva carpeta
            </button>
          </li>
          <li className="text-white">
            <button className="flex items-center bg-primary py-3 px-5 rounded-lg">
              <i className="fa-regular fa-circle-play mr-2" />
              Nuevo video
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
