import React from "react";
import Footer from "../components/Footer";
import Aboutcompany from "../components/company/Aboutcompany";
// Footer
const Company = () => {
  return (
    <section className="bg-slate-50 dark:bg-slate-800">
      <Aboutcompany />
      <Footer />
    </section>
  );
};

export default Company;
