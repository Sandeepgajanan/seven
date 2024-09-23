import React from "react";
const Servicecard = ({ val }) => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.1"
      className=" w-[25%] flex flex-col items-center  py-10 flex-shrink-0 max-sm:w-[70%] max-sm:py-2"
    >
      <h1 className="font-serif text-md border-b-[1px] border-b-zinc-500 pb-2 gradient-text ">
        {val.title}
      </h1>
      <div className="w-64  rounded-xl mt-2 p-5  border-[1px] border-zinc-200  bg-zinc-200  shadow-2xl h-[40vh] ">
        <div className="w-full p-3  rounded-xl overflow-hidden flex items-center justify-center max-sm:p-1">
          <img className=" object-cover " src={val.img} alt="" />
        </div>
        <p className="text-sm font-serif text-zinc-800 text-center mt-2">
          {val.description}
        </p>
      </div>
    </div>
  );
};

export default Servicecard;
