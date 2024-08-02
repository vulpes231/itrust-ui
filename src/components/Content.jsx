import React from "react";
import Hero from "./Hero";
import Footer from "./Footer";

const Content = () => {
  return (
    <section className="w-full min-h-screen">
      <div className="bg h-[700px]">
        <Hero />
      </div>
    </section>
  );
};

export default Content;
