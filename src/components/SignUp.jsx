import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="border-2 border-black h-[500px] w-[400px] ">
        <h1 className="text-2xl font-inter font-bold text-center my-2 py-4 ">
          SignUp
        </h1>
        <div className="  mt-20 p-8  ">
          <input
            placeholder="Email"
            type="text"
            className="px-3 py-1 my-3 font-inter text-sm w-full border-b border-black focus:outline-none"
          />
          <input
            placeholder="Password"
            type="password"
            className="px-3 py-1 my-3 font-inter text-sm w-full border-b border-black focus:outline-none"
          />
        </div>
        <button className="mx-40 mt-5 border-2 border-blue-400 py-2 px-1 rounded-lg hover:transform">
          Sign Up
        </button>
        <Link className="ml-[100px]" to="/login">
          Already have an account?
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
