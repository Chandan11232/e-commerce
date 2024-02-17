import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

const Button = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <div className="mx-5 my-3 px-[10px] py-2 bg-white cursor-pointer text-black/60 rounded-full">
        <IoSearchSharp
          onClick={handleClick}
          className="border-2 border-red-600"
          size={20}
        />
        {clicked && (
          <input
            placeholder="Search for an item"
            type="text"
            className="pl-8 rounded-full border-white border focus:outline-none"
          />
        )}
      </div>
    </>
  );
};

export default Button;
