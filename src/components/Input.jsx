import React from "react";

const Input = ({ placeholder, setInputValue, inputValue }) => {
  return (
    <form className="relative mt-10">
      <i className="fa-solid fa-search dark:text-gray-300 absolute left-3 bottom-[15%] text-2xl text-secondary border-r-[2px] border-solid border-seondary pr-2" />
      <input
        onChange={(e) => setInputValue(e.target.value)}
        type="search"
        value={inputValue}
        className="w-1/3 py-2 ps-[50px] text-xl  border-gray-300 rounded-lg bg-white border-2 focus:outline-none focus:border-secondary ease-in-out"
        placeholder={placeholder}
        required
      />
    </form>
  );
};

export default Input;
