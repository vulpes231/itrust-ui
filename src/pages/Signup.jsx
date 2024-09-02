import React, { useEffect, useContext, useState } from "react";
import { TitleContext } from "../contexts/TitleContext";
import Section from "../components/Section";
import { Link } from "react-router-dom";
import { whitelogo } from "../assets";
import { styles } from "../constants/styles";
import Stepone from "../components/Stepone";
import Steptwo from "../components/Steptwo";
import Stepthree from "../components/Stepthree";

const Signup = () => {
  const { changeTitle } = useContext(TitleContext);

  const [page, setPage] = useState(1);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  useEffect(() => {
    changeTitle("Quadx - Create Account");
  }, [changeTitle]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePageSwitch = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <Section>
      <div className="container px-3">
        <div className="flex justify-center -mx-3">
          <form className="w-full xs:w-4/5 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/3 px-3">
            <Link to={"/"} className=" flex items-center justify-center py-5">
              <img src={whitelogo} alt="" className="w-[100px] " />
            </Link>
            <div className="dark:bg-white bg-slate-950 rounded-lg border dark:border-slate-200 border-slate-800 w-full p-6 pt-5">
              <div className="mb-2">
                <h3 className="text-xl font-bold mb-1">Create Account</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  With valid information
                </p>
              </div>

              {page === 1 && (
                <Stepone
                  formData={formData}
                  handleChange={handleChange}
                  pageSwitch={handlePageSwitch}
                />
              )}
              {/* contact */}
              {page === 2 && (
                <Steptwo
                  formData={formData}
                  handleChange={handleChange}
                  pageSwitch={handlePageSwitch}
                />
              )}
              {/* verify */}
              {page === 3 && (
                <Stepthree formData={formData} handleChange={handleChange} />
              )}

              <p className="text-center text-xs font-sm py-3 flex gap-2">
                Already have an account?
                <Link
                  className={`${styles.colors.primaryTextColor}`}
                  to={"/signin"}
                >
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Signup;
