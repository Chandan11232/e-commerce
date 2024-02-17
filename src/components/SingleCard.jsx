import React from "react";

const SingleCard = ({ image, description }) => {
  return (
    <div className="rounded-2xl max-w-[300px] hover:transform hover:scale-110 hover:translate-y-[10px] cursor-pointer transition duration-500 m-10 shadow-md shadow-gray-400">
      <img src={image} className=" rounded-t-2xl lg:w-full" />

      <div className="bg-white rounded-b-2xl text-center h-auto">
        {description}
      </div>
    </div>
  );
};

export default SingleCard;
