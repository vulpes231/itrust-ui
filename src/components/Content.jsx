import React from "react";
import Hero from "./Hero";
import Section from "./Section";

const Content = () => {
  return (
    <section className="w-full min-h-screen ">
      <div className="bg h-[500px]">
        <Hero />
      </div>
    </section>
  );
};

export default Content;
