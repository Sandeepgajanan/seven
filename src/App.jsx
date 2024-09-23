import React from "react";
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
  const scroll = new LocomotiveScroll();

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
