import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { texts } from "../constants";
import Button from "./Button";

const Hero = () => {
  const logoRef = useRef(null);
  const heroRef = useRef(null);
  useEffect(() => {
    const handleMouseMove = (dets) => {
      gsap.to(logoRef.current, {
        left: dets.x,
        top: dets.y,
      });
    };
    const handleMouseEnter = () => {
      gsap.to(logoRef.current, {
        opacity: 1,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(logoRef.current, {
        opacity: 0,
      });
    };

    const hero = heroRef.current;

    document.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseenter", handleMouseEnter);
    hero.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseenter", handleMouseEnter);
      hero.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className=" max-w-screen-xl mx-auto pt-20  select-none  max-sm:pt-8 max-sm:h-[95vh]">
      <div className=" w-full h-full flex items-center justify-center flex-col">
        <div className="relative  h-fit w-fit z-10 text-center" ref={heroRef}>
          {texts.map((item, index) => (
            <h1
              className="font-bold uppercase text-[8vw] leading-[7vw] font-[ff] bg-clip-text text-transparent bg-gradient-to-br from-teal-600 via-cyan-700 to-blue-800 max-sm:text-[13vw] max-sm:leading-[12vw] "
              key={index}
            >
              {item}
            </h1>
          ))}{" "}
          <div className=" items-center justify-center mt-14 hidden max-sm:flex flex-col gap-10">
            <motion.p
              className="font-medium uppercase text-[5.3vw] leading-[5.3vw] font-[ff] text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3, ease: "easeInOut", delay: 5.4 }}
            >
              Our Strategic Consulting services leverage the best of <br />
              Internet trends and technologies for successful <br />
              business outcomes.
            </motion.p>
            <Button />
          </div>
        </div>
        <div
          className="h-32 absolute top-44 left-1/2 -translate-x-[50%] opacity-0 max-sm:hidden"
          ref={logoRef}
        >
          <img
            className=" h-full object-cover"
            src="https://cdn.7edge.com/images/sticky-7edge-logo.svg"
            alt=""
          />
        </div>
      </div>

      <div className="flex items-center justify-between mt-12">
        <motion.div
          className="w-[68%]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 8.6, ease: "easeInOut" }}
        >
          <motion.img
            initial={{ opacity: 0, x: -400 }}
            animate={{
              opacity: 1,
              x: 890,
              rotate: 360,
            }}
            transition={{ duration: 5, ease: "easeInOut", delay: 4.4 }}
            src="https://img.icons8.com/?size=100&id=53375&format=png&color=000000"
            alt="wheel"
            className="object-cover mt-2 max-sm:hidden"
          />
        </motion.div>
        <div className="max-sm:hidden">
          <motion.p
            className="font-medium uppercase text-[1.6vw] leading-[1.6vw] font-[ff] text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 8.4 }}
          >
            Our Strategic Consulting services leverage the best of <br />
            Internet trends and technologies for successful <br />
            business outcomes.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
