import React from "react";
import Help from "./Help";
import Undereffect from "./Undereffect";
import { helpcontent } from "../constants";
const Helps = () => {
  return (
    <div className="w-full h-full select-none mt-10 max-sm:mt-2">
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-0.09"
        className="max-w-screen-lg mx-auto py-10 max-sm:py-5"
      >
        <h1 className="text-[5vw] font-[ff] text-center uppercase mb-10 gradient-text max-sm:text-[8vw] ">
          See How We Can Help You Succeed
        </h1>
        <Undereffect />

        {helpcontent.map((item, index) => (
          <Help val={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Helps;
