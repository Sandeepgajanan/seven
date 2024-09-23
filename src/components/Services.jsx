import React from "react";
import Undereffect from "./Undereffect";
import { service } from "../constants";
import Servicecard from "./Servicecard";

const Services = () => {
  return (
    <section className="w-full h-full py-10  select-none px-10">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-[5vw] font-[ff] text-center uppercase mb-10 gradient-text max-sm:text-[8vw]">
          Why Internet First
        </h1>
        <Undereffect />
        <p className="text-xl font-serif mt-10 opacity-90 font-medium text-center w-1/2 m-auto max-sm:text-sm max-sm:w-full">
          The internet revolution has changed everything about the way business
          is run today. It has compelled enterprises to change their strategies
          and operations to gain competitive advantage and stay relevant. This
          changing landscape calls for a comprehensive approach to meet the
          challenge.
        </p>{" "}
        <div className="mt-5 flex items-center justify-center flex-wrap gap-4 w-full h-full max-sm:flex-col max-sm:gap-8 max-sm:mt-1">
          {service.map((item, index) => (
            <Servicecard key={index} val={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
