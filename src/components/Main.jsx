import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../images/images.jpeg";
import Cards from "./Cards";

const Main = () => {
  const [firstSlide, setFirstSlide] = useState([
    {
      url: "https://images.unsplash.com/photo-1695048132853-026f93f40f7f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1702184117235-56002cb13663?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]);
  return (
    <>
      <div className="p-2 flex justify-between w-full bg-black/60 text-white h-30 sticky top-0">
        <h1 className="p-4 text-2xl ml-4 font-bold">Brand Name</h1>
        <div className="sm:flex gap-8 hidden sm:block text-xl mr-2 p-4">
          <Link>Home</Link>
          <Link>About</Link>
          <Link to="/signup">Account</Link>
          <Link>Cart</Link>
        </div>
        <button className="mr-7 p-4">Search</button>
      </div>
      <div className="flex flex-col h-[500px] w-full sm:items-center sm:flex-row sm:justify-center">
        <div className="flex flex-col w-[40%] mx-auto m-6 sm:w-[30%] border-2 border-black  justify-center">
          <img className="object-contain" src={firstSlide[0].url} />
        </div>
        <div className="m-4 text-center w-[80%] mx-auto sm:flex sm:w-[40%] sm:flex-col sm:mx-auto ">
          <h1 className="my-5 font-bold text-4xl">Macbook M3 Pro</h1>
          <p className="sm:text-center text-black/60 sm:text-2xl text-xl font-bold">
            Featuring the M3 Pro chip, it delivers blazing-fast speeds for
            demanding tasks like video editing and 3D rendering.
          </p>
        </div>
      </div>
      <Cards />
    </>
  );
};
export default Main;
