import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full bg-gray-400 flex justify-between p-4">
      <div className="font-inter">LOGO</div>
      <div className="flex gap-2 font-inter ">
        <div>Home</div>
        <Link to="/signup">SignUp</Link>
        <div>Login</div>
      </div>
    </div>
  );
};

export default Header;
