import React from "react";

const Section = ({ children }) => {
  return (
    <section className="p-6 lg:max-w-[1000px] lg:mx-auto flex flex-col gap-6 md:justify-center min-h-[calc(100vh-60px)] mt-16">
      {children}
    </section>
  );
};

export default Section;
