import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import LocomotiveScroll from "locomotive-scroll";
import Expand from "./components/Expand";
import Internet from "./components/Internet";
import Services from "./components/Services";
import Helps from "./components/Helps";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    if (window.innerWidth > 768) {
      const scroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
      });

      return () => {
        if (scroll) scroll.destroy();
      };
    }
  }, []);

  return (
    <>
      <div className="w-full min-h-screen text-zinc-700 relative back">
        <Loader />
        <Navbar />
        <Hero />
        <Expand />
        <Internet />
        <Services />
        <Helps />
        <Footer />
      </div>
    </>
  );
};

export default App;
