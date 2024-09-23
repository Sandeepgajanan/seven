import { motion } from "framer-motion";
import Button from "./Button";
import { data } from "../constants";

const Navbar = () => {
  return (
    <header className="max-w-screen-xl mx-auto">
      <nav className="px-2 py-4 flex gap-28 items-center select-none">
        <div className="flex items-center">
          <img
            className="max-sm:h-6"
            src="https://cdn.7edge.com/images/7EDGE-logo.png"
            alt="7edge logo"
          />
        </div>
        <div className="flex items-center gap-6 pt-4 whitespace-nowrap max-sm:hidden">
          {data.map((item, index) => (
            <motion.a
              href="#"
              key={index}
              className="capitalize py-1 relative flex-shrink-0 px-3 w-fit  font-medium text-md opacity-85"
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {item}
            </motion.a>
          ))}
        </div>
        <div className="max-sm:hidden">
          {" "}
          <Button />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
