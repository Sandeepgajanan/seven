import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Internet = () => {
  const internetRef = useRef(null);
  const h1Ref = useRef(null);

  useEffect(() => {
    gsap.to(h1Ref.current, {
      xPercent: -100,
      ease: "power1.out",
      scrollTrigger: {
        trigger: h1Ref.current,
        scroller: "body",
        scrub: 4,
        start: "top 10%",
        end: "bottom bottom",
        pin: true,
        anticipatePin: 1,
      },
    });
  }, []);

  return (
    <>
      <div
        className="w-full bg-green-400  h-screen overflow-hidden whitespace-nowrap px-10 select-none  max-sm:hidden"
        ref={internetRef}
      >
        <h1
          data-scroll
          data-scroll-section
          data-scroll-speed="-0.8"
          data-scroll-direction="horizontal"
          className="font-[ff] text-[33vw] uppercase leading-[28vw] flex mt-20  "
          ref={h1Ref}
        >
          Internet first
          <span className="px-2 py-2 bg-yellow-400 text-2xl h-12 mt-[60vh] rounded-xl ">
            Download our Internet First Manifesto
          </span>
        </h1>
      </div>
      <div className=" max-sm:flex items-center justify-center hidden">
        <span className=" bg-yellow-400 text-sm h-fit w-fit rounded-xl px-2 py-2 font-[ff]">
          Download our Internet First Manifesto
        </span>
      </div>
    </>
  );
};

export default Internet;
