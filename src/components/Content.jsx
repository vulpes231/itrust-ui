import React, { useContext, useEffect } from "react";
import Hero from "./Hero";
import { TitleContext } from "../contexts/TitleContext";

const Content = () => {
  const { changeTitle } = useContext(TitleContext);
  useEffect(() => {
    changeTitle("Quadx - Welcome");
  }, [changeTitle]);
  return (
    <section className="w-full min-h-screen">
      <div className="bg h-[700px]">
        <Hero />
      </div>
    </section>
  );
};

export default Content;
