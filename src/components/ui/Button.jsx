import React from "react";

const Button = ({title}) => {
  return (
    <button className="px-8 py-2 bg-zerodhaBlueColor text-white font-semibold outline-none text-[22px] rounded-sm font-Inter hover:bg-gray-950">
      {title}
    </button>
  );
};

export default Button;
