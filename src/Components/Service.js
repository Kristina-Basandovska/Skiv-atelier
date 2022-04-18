import React from "react";

export default function Service({imgSrc,mainText,secondaryText}) {
  return (
    <div className="flex flex-col items-center p-4 mb-10 lg:w-[350px] hover:shadow-xl cursor-pointer transition duration-300 ease-in-out">
      <img
        src={imgSrc}
        className="w-[80%] lg:w-[300px]"
      />
      <p className="font-semibold text-base p-2 text-center">{mainText}</p>
      <p className="text-center text-sm ">
        {secondaryText}
      </p>
    </div>
  );
}
