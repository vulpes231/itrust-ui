import React, { useEffect } from "react";
import Containerdark from "../components/general/Containerdark";
import Containerlight from "../components/general/Containerlight";

import Faqcomponent from "../components/landing/Faqcomponent";
import { generalQuestions } from "../constants";
import Footer from "../components/Footer";

const Title = ({ txt }) => {
  return (
    <h3 className="text-xl lg:text-3xl font-bold lg:text-center text-left">
      {txt}
    </h3>
  );
};

const Holder = ({ children, customClass }) => {
  return (
    <div className={`flex flex-col py-16 lg:mx-32  ${customClass}`}>
      {children}
    </div>
  );
};

const Frequent = ({ setActiveLink }) => {
  useEffect(() => {
    setActiveLink();
  }, []);
  return (
    <section>
      <Containerdark>
        <Holder>
          <div className="flex flex-col gap-4">
            <Title txt={"Frequently Ask Questions"} />
          </div>
        </Holder>
      </Containerdark>
      <Containerlight>
        <Holder>
          <Faqcomponent faqTitle={"general"} faqs={generalQuestions} />
        </Holder>
      </Containerlight>
      <Containerdark>
        <Holder>
          <div className="py-5">
            <Faqcomponent faqTitle={"Trading Bot"} faqs={generalQuestions} />
          </div>
        </Holder>
      </Containerdark>
      <Containerlight>
        <Holder>
          <Faqcomponent faqTitle={"Smart trade"} faqs={generalQuestions} />
        </Holder>
      </Containerlight>
      <Footer />
    </section>
  );
};

export default Frequent;
