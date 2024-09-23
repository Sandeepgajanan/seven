import React, { useEffect } from "react";
import { lines } from "../constants";
import gsap from "gsap";

const Loader = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const lines = document.querySelectorAll(".loader h1");
    const tl = gsap.timeline();
    lines.forEach((line) => {
      tl.to(line, { opacity: 1, duration: 0.8 }).to(line, {
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
      });
    });
    tl.to(".loader", {
      y: -700,
      duration: 0.8,
      delay: 0.3,
      opacity: 0,
    }).eventCallback("onComplete", () => {
      document.body.style.overflow = "auto";
    });

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="loader w-full h-screen  top-0 bg-zinc-900 z-[99] pointer-events-none flex flex-col items-center justify-center fixed max:sm">
      {lines.map((item, index) => (
        <h1
          className="font-bold uppercase text-[7vw] text-zinc-100 font-[ff] absolute opacity-0 max-sm:text-[9vw]"
          key={index}
        >
          {item}
        </h1>
      ))}
    </div>
  );
};

export default Loader;
