import React, { useEffect, useContext, useState } from "react";
import { TitleContext } from "../contexts/TitleContext";
import Section from "../components/Section";
// import { MdContactPage, MdPersonAddAlt, MdVerifiedUser } from "react-icons/md";
import Formspan from "../components/Formspan";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Label from "../components/Label";
import { useDispatch, useSelector } from "react-redux";
import { createAccount } from "../features/signupSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { changeTitle } = useContext(TitleContext);

  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    password2: "",
    phone: "",
    address: "",
    country: "",
    state: "",
    city: "",
    zip: "",
    ssn: "",
    dob: "",
    nationality: "",
    currency: "usd",
    investmentExperience: "",
    employmentStatus: "",
    brokerageFamily: "",
    referralCode: "",
    termsAccepted: false,
  });

  const { loading, error, success } = useSelector((state) => state.create);

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

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(createAccount(formData));
  };

  useEffect(() => {
    let timeout;
    if (success) {
      setTimeout(() => {
        timeout = 5000;
        navigate("/signin");
      }, timeout);
    }
    () => clearTimeout(timeout);
  }, [dispatch]);

  return (
    <Section>
      <div className="container px-3">
        <div className="flex justify-center -mx-3">
          <form
            onSubmit={handleSubmit}
            className="w-full xs:w-4/5 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/3 px-3"
          >
            <div className="bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 w-full p-6 pt-5">
              <div className="mb-2">
                <h3 className="text-xl font-bold text-slate-700 dark:text-white mb-1">
                  Create Account
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  With valid information
                </p>
              </div>
              {/* <div className=" mb-2 w-full flex items-center justify-center gap-5 dark:text-slate-200">
                <span
                  className={
                    page === 1
                      ? "bg-[#2563EB] bg-opacity-10 p-2 rounded-full text-[#2563EB] flex items-center justify-center"
                      : "bg-transparent"
                  }
                >
                  <MdPersonAddAlt />
                </span>
                <span
                  className={
                    page === 2
                      ? "bg-[#2563EB] bg-opacity-10 p-2 rounded-full text-[#2563EB] flex items-center justify-center"
                      : "bg-transparent"
                  }
                >
                  <MdContactPage />
                </span>
                <span
                  className={
                    page === 3
                      ? "bg-[#2563EB] bg-opacity-10 p-2 rounded-full text-[#2563EB] flex items-center justify-center"
                      : "bg-transparent"
                  }
                >
                  <MdVerifiedUser />
                </span>
              </div> */}
              {/* <div className="py-2">
                <h3 className="text-sm font-normal">
                  {page === 1
                    ? "Personal details"
                    : page === 2
                    ? "Contact Information"
                    : "Verify your identity"}
                </h3>
                <small className="font-extralight text-slate-500 text-xs ">
                  Fill all information below.
                </small>
              </div> */}
              {page === 1 && (
                <div className="py-2">
                  <Formspan>
                    <Label title={"first name"} />
                    <Input
                      type={"text"}
                      name="firstName"
                      value={formData.firstName}
                      handleChange={handleChange}
                      placeHolder={"Enter Firstname"}
                    />
                  </Formspan>
                  <Formspan>
                    <Label title={"last name"} />
                    <Input
                      type={"text"}
                      name="lastName"
                      value={formData.lastName}
                      handleChange={handleChange}
                      placeHolder={"Enter Lastname"}
                    />
                  </Formspan>
                  <Formspan>
                    <Label title={"username"} />
                    <Input
                      type={"text"}
                      name="username"
                      value={formData.username}
                      handleChange={handleChange}
                      placeHolder={"Enter Username"}
                    />
                  </Formspan>
                  <Formspan>
                    <Label title={"email"} />
                    <Input
                      type={"text"}
                      name="email"
                      value={formData.email}
                      handleChange={handleChange}
                      placeHolder={"Enter Email"}
                    />
                  </Formspan>
                  <Formspan>
                    <Label title={"password"} />
                    <Input
                      type={"password"}
                      name="password"
                      value={formData.password}
                      handleChange={handleChange}
                      placeHolder={"Enter password"}
                    />
                  </Formspan>
                  <Formspan>
                    <Label title={"confirm password"} />
                    <Input
                      type={"password"}
                      name="password2"
                      value={formData.password2}
                      handleChange={handleChange}
                      placeHolder={"Enter password"}
                    />
                  </Formspan>
                </div>
              )}
              {/* contact */}
              {page === 2 && (
                <div className="flex flex-col gap-4 capitalize text-sm font-semibold">
                  <Formspan>
                    <Label title={"phone"} />
                    <Input
                      type={"text"}
                      name="phone"
                      value={formData.phone}
                      handleChange={handleChange}
                      placeHolder={"Enter Phone"}
                    />
                  </Formspan>
                  <Formspan>
                    <Label title={"address"} />
                    <Input
                      type={"text"}
                      name="address"
                      value={formData.address}
                      handleChange={handleChange}
                      placeHolder={"123 Example Street"}
                    />
                  </Formspan>
                  <Formspan>
                    <Label title={"country"} />
                    <select
                      className=" border p-2 outline-[#2563EB] text-xs font-thin"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                    >
                      <option value="">select country</option>
                      {/* Add country options */}
                    </select>
                  </Formspan>
                  <Formspan>
                    <Label title={"state"} />
                    <select
                      className=" border p-2 outline-[#2563EB] text-xs font-thin"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                    >
                      <option value="">select state</option>
                      {/* Add state options */}
                    </select>
                  </Formspan>
                  <Formspan>
                    <Label title={"city"} />
                    <Input
                      type={"text"}
                      name="city"
                      value={formData.city}
                      handleChange={handleChange}
                      placeHolder={"Enter City"}
                    />
                  </Formspan>
                  <Formspan>
                    <Label title={"zip code"} />
                    <Input
                      type={"text"}
                      name="zip"
                      value={formData.zip}
                      handleChange={handleChange}
                      placeHolder={"Enter Zipcode"}
                    />
                  </Formspan>
                </div>
              )}
              {/* verify */}
              {page === 3 && (
                <div className="flex flex-col gap-4 capitalize text-sm font-semibold">
                  <Formspan>
                    <Label title={"social security number"} />
                    <Input
                      type={"text"}
                      name="ssn"
                      value={formData.ssn}
                      handleChange={handleChange}
                      placeHolder={"Enter SSN"}
                    />
                  </Formspan>
                  <Formspan>
                    <Label title={"date of birth"} />
                    <Input
                      type={"date"}
                      name="dob"
                      value={formData.dob}
                      handleChange={handleChange}
                      customClass={"text-xs font-thin"}
                    />
                  </Formspan>
                  <Formspan>
                    <Label title={"nationality"} />
                    <select
                      className="font-thin text-xs border p-2 outline-[#2563EB]"
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleChange}
                    >
                      <option value="">select nationality</option>
                      {/* Add nationality options */}
                    </select>
                  </Formspan>
                  <Formspan>
                    <Label title={"currency"} />
                    <select
                      className="font-thin text-xs border p-2 outline-[#2563EB]"
                      name="currency"
                      value={formData.currency}
                      onChange={handleChange}
                    >
                      <option value="usd">USD ($)</option>
                      <option value="gbp">GBP (£)</option>
                      <option value="eur">EUR (€)</option>
                    </select>
                  </Formspan>
                  <p>further questions</p>
                  <hr />
                  <Formspan>
                    <Label
                      title={"how much investment experience do you have?"}
                    />

                    <select
                      className="font-thin text-xs border p-2 outline-[#2563EB]"
                      name="investmentExperience"
                      value={formData.investmentExperience}
                      onChange={handleChange}
                    >
                      <option value="">select an answer</option>
                      <option value="none">none</option>
                      <option value="beginner">beginner</option>
                      <option value="intermediate">
                        I know what I'm doing
                      </option>
                      <option value="expert">I'm an expert</option>
                    </select>
                  </Formspan>
                  <Formspan>
                    <Label title={" are you employed? "} />

                    <select
                      className="font-thin text-xs border p-2 outline-[#2563EB]"
                      name="employmentStatus"
                      value={formData.employmentStatus}
                      onChange={handleChange}
                    >
                      <option value="unemployed">unemployed</option>
                      <option value="employed">employed</option>
                      <option value="retired">retired</option>
                      <option value="student">student</option>
                    </select>
                  </Formspan>
                  <Formspan>
                    <Label
                      title={
                        " do you or a family member work for another brokerage? "
                      }
                    />

                    <article className="flex items-center gap-4 text-xs font-thin">
                      <span className="flex items-center gap-1">
                        yes{" "}
                        <input
                          type="radio"
                          name="brokerageFamily"
                          value="yes"
                          checked={formData.brokerageFamily === "yes"}
                          onChange={handleChange}
                        />
                      </span>
                      <span className="flex items-center gap-1">
                        no{" "}
                        <input
                          type="radio"
                          name="brokerageFamily"
                          value="no"
                          checked={formData.brokerageFamily === "no"}
                          onChange={handleChange}
                        />
                      </span>
                    </article>
                  </Formspan>
                  <Formspan>
                    <Label title={"referral code (optional)"} />

                    <Input
                      type={"text"}
                      name="referralCode"
                      value={formData.referralCode}
                      handleChange={handleChange}
                    />
                  </Formspan>
                  <div className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      name="termsAccepted"
                      checked={formData.termsAccepted}
                      onChange={handleChange}
                    />
                    <small className="whitespace-nowrap text-xs font-thin">
                      I have read &amp; accept{" "}
                      <Link>Terms &amp; conditions.</Link>
                    </small>
                  </div>
                </div>
              )}
              {/* buttons */}
              <div className="flex justify-between p-2">
                {page > 1 && (
                  <div className="pt-3">
                    <Button
                      type={"button"}
                      handleClick={handlePrevious}
                      title={"previous"}
                    />
                  </div>
                )}
                {page < 3 ? (
                  <div className="pt-3">
                    <Button
                      type={"button"}
                      handleClick={handleNext}
                      title={"next"}
                    />
                  </div>
                ) : (
                  <div className="pt-3">
                    <Button
                      type={"submit"}
                      handleClick={handleSubmit}
                      title={loading ? "creating account..." : "create account"}
                    />
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Signup;
