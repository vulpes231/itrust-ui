import React from "react";

const Section = ({ children }) => {
  return (
    <section className="min-h-screen p-6 lg:max-w-[1000px] lg:mx-auto flex flex-col gap-6">
      {children}
    </section>
  );
};

export default Section;
