import React from "react";
import { cardList } from "../cardsData";
import SingleCard from "./SingleCard";
import "../index.css";

const Cards = () => {
  return (
    <>
      <div className=" w-full">
        <div className="flex flex-col w-full p-6  mx-auto gap-3 items-center sm:flex sm:flex-row sm:justify-between sm:items-center sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 md:p-10 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4 ">
          {cardList.map((card) => (
            <SingleCard
              image={card.img}
              key={card.id}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
