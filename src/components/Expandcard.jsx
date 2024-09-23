import React from "react";
import { expandData } from "../constants";
const Expandcard = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.2"
      className="flex items-center justify-between  flex-wrap max-sm:flex-col max-sm:px-10"
    >
      {expandData.map((item, index) => (
        <div
          className="mt-10 w-[15vw] py-5 rounded-xl relative overflow-hidden shadow-2xl flex flex-col items-center  justify-center flex-shrink-0 bg-zinc-200 max-sm:w-[60vw] max-sm:py-3 max-sm:mt-2"
          key={index}
        >
          <img className="object-cover" src={item.img} alt="Card Front" />

          <h1 className="font-[ff]  font-bold text-2xl mt-2">{item.back}</h1>
        </div>
      ))}
    </div>
  );
};

export default Expandcard;
