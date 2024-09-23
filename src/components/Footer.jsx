import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-slate-100 text-gray-800 py-10 font-[ff]">
      <div className="max-w-screen-lg mx-auto flex items-center justify-center">
        <h1 className="font-ff text-2xl">
          Redesigned by:
          <a
            href="https://linkedin.com/in/sandeep-gajanan-05610a256"
            className="text-red-500 hover:underline pl-2"
            target="_blank" // Open in a new tab
            rel="noopener noreferrer" // Security best practice
          >
            Sandeep Gajanan
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
