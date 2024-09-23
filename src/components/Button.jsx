import React from "react";
import { motion } from "framer-motion";
const Button = ({ text = "contact us" }) => {
  return (
    <motion.div
      className="relative w-28 h-8 pl-2 py-1 rounded-md border-[1px] border-zinc-400 flex-shrink-0 mt-4 hover:text-zinc-100 overflow-hidden max-sm:hover:text-zinc-950 max-sm:w-fit max-sm:px-2"
      whileHover="hover"
    >
      <span className="uppercase text-md font-semibold cursor-pointer relative z-10 max-sm:font-[ff]">
        {text}
      </span>

      <motion.div
        className="absolute top-0 left-0 w-28 h-8 bg-cyan-500"
        initial={{ y: "100%" }}
        variants={{
          hover: {
            y: "0%",
            transition: { duration: 0.4, ease: "easeInOut" },
          },
        }}
      />
    </motion.div>
  );
};

export default Button;
