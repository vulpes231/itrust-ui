import React from "react";

const Section = ({ children }) => {
  return (
    <section className="p-6 flex flex-col gap-6 md:justify-center min-h-[calc(100vh-60px)] mt-12 bg-slate-50">
      {children}
    </section>
  );
};

export default Section;
