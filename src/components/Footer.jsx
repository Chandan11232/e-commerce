import React from "react";

const Footer = () => {
  return (
    <div className="flex w-full justify-between p-4 bg-gray-400">
      <div>&#169; All Rights Reserved</div>
      <div className="flex gap-2">
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>
      </div>
    </div>
  );
};

export default Footer;
