import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import Expandcard from "./Expandcard";
import { content } from "../constants";
import Undereffect from "./Undereffect";
gsap.registerPlugin(ScrollTrigger);

const Expand = () => {
  useEffect(() => {
    const allH1 = document.querySelectorAll(".expand h1");
    allH1.forEach((elem) => {
      let clutter = "";
      const allH1Text = elem.textContent;
      const splittedText = allH1Text.split("");
      splittedText.forEach((char) => {
        clutter += `<span>${char}</span>`;
      });
      elem.innerHTML = clutter;
    });

    gsap.to(".expand h1 span", {
      color: "#e94560",
      stagger: 0.8,
      scrollTrigger: {
        trigger: ".ex",
        scroller: "body",
        start: "top 65%",
        scrub: 1,
        ease: "power3.inOut",
      },
    });
  }, []);

  return (
    <section className="detail w-full min-h-screen py-20 select-none max-sm:py-10">
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-0.15"
        className="max-w-screen-lg mx-auto"
      >
        <div className="ex">
          <h1 className="text-[5vw] font-[ff] text-center uppercase mb-10 gradient-text max-sm:text-[8vw]">
            Expand your business capabilities
          </h1>
        </div>
        <Undereffect />

        <div className="expand text-[#1a202c] text-center pb-10 max-sm:max-sm:mt-4  max-sm:px-5">
          {content.map((item, index) => (
            <h1
              key={index}
              className="font-[ff] text-[3vw] max-sm:text-[6vw] max-sm:leading-[6vw] "
            >
              {item}
            </h1>
          ))}
        </div>

        <Expandcard />
      </div>
    </section>
  );
};

export default Expand;
