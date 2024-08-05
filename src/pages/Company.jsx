import React from "react";
import Footer from "../components/Footer";
import Aboutcompany from "../components/company/Aboutcompany";
import Companyinfo from "../components/company/Companyinfo";
import Aboutpart from "../components/company/Aboutpart";
import Vision from "../components/company/Vision";
// Footer
const Company = () => {
  return (
    <section className="bg-slate-50 dark:bg-slate-800">
      <Aboutcompany />
      <Companyinfo />
      <Aboutpart />
      <Vision />
      <Footer />
    </section>
  );
};

export default Company;
