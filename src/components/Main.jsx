import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import Button from "./Button";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Main = () => {
  const [slide, setSlide] = useState([
    {
      url: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP854/mbp14-silver2.png",
    },
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slide.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slide.length - 1;
    const newSlide = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newSlide);
  };
  return (
    <>
      <div className="bg-black/10">
        <div className="p-2 flex justify-between w-full bg-black/60 text-white z-10 h-30 sticky top-0">
          <h1 className="p-4 text-2xl ml-4 font-bold">Brand Name</h1>
          <div className="sm:flex gap-8 hidden sm:block text-xl mr-2 p-4">
            <Link>Home</Link>
            <Link>About</Link>
            <Link to="/signup">Account</Link>
            <Link>Cart</Link>
          </div>
          <Button />
        </div>
        <div className="flex h-[620px] h-[660px] flex-col items-center justify-center sm:flex-row ">
          <div className="flex flex-col w-[40%] mx-auto m-9 sm:w-[30%] justify-center">
            <img
              className="overflow-hidden hover:transform hover:scale-110 cursor-pointer transition duration-300"
              src={slide[currentIndex].url}
            />
            <div className=" hidden group-hover:block absolute top-[45%] left-2 -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            <div className="absolute hidden group-hover:block top-[45%] -translate-x-0 translate-y-[-50%] right-2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
          </div>
          <div className="sm:mr-17 text-center w-[80%] mx-auto sm:flex sm:w-[40%] sm:flex-col sm:mx-auto ">
            <h1 className="my-5 font-bold text-4xl">Macbook M3 Pro</h1>
            <p className="sm:text-center text-black/60 sm:text-2xl text-xl font-bold">
              Featuring the M3 Pro chip, it delivers blazing-fast speeds for
              demanding tasks like video editing and 3D rendering.
            </p>
          </div>
        </div>

        <Cards />
      </div>
    </>
  );
};
export default Main;
