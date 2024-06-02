import React, { useEffect, useContext, useState } from "react";
import { TitleContext } from "../contexts/TitleContext";
import Section from "../components/Section";
import { MdContactPage, MdPersonAddAlt, MdVerifiedUser } from "react-icons/md";
import Formspan from "../components/Formspan";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Signup = () => {
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
    // Handle form submission logic
  };

  return (
    <Section>
      <div className="flex flex-col gap-1 items-center text-[#333]">
        <h3 className="capitalize font-semibold text-lg">create new account</h3>
        <small className="font-light text-slate-500">
          Get started on your quadx journey.
        </small>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full border p-6 text-[#333] flex flex-col gap-6"
      >
        <div className="flex flex-col gap-4 items-center p-2">
          <div className="w-full flex items-center justify-center gap-10">
            <span
              className={
                page === 1
                  ? "bg-[#2563EB] bg-opacity-25 p-2 rounded-full"
                  : "bg-transparent"
              }
            >
              <MdPersonAddAlt />
            </span>
            <span
              className={
                page === 2
                  ? "bg-[#2563EB] bg-opacity-25 p-2 rounded-full"
                  : "bg-transparent"
              }
            >
              <MdContactPage />
            </span>
            <span
              className={
                page === 3
                  ? "bg-[#2563EB] bg-opacity-25 p-2 rounded-full"
                  : "bg-transparent"
              }
            >
              <MdVerifiedUser />
            </span>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-normal">
              {page === 1
                ? "Personal details"
                : page === 2
                ? "Contact Information"
                : "Verify your identity"}
            </h4>
            <small className="font-light text-slate-500">
              Fill all information below.
            </small>
          </div>
        </div>

        {page === 1 && (
          <div className="flex flex-col gap-4 capitalize text-sm font-semibold">
            <Formspan>
              <label htmlFor="firstName">first name</label>
              <Input
                type={"text"}
                name="firstName"
                value={formData.firstName}
                handleChange={handleChange}
                placeHolder={"Enter Firstname"}
              />
            </Formspan>
            <Formspan>
              <label htmlFor="lastName">last name</label>
              <Input
                type={"text"}
                name="lastName"
                value={formData.lastName}
                handleChange={handleChange}
                placeHolder={"Enter Lastname"}
              />
            </Formspan>
            <Formspan>
              <label htmlFor="username">username</label>
              <Input
                type={"text"}
                name="username"
                value={formData.username}
                handleChange={handleChange}
              />
            </Formspan>
            <Formspan>
              <label htmlFor="email">email</label>
              <Input
                type={"text"}
                name="email"
                value={formData.email}
                handleChange={handleChange}
              />
            </Formspan>
            <Formspan>
              <label htmlFor="password">password</label>
              <Input
                type={"password"}
                name="password"
                value={formData.password}
                handleChange={handleChange}
              />
            </Formspan>
            <Formspan>
              <label htmlFor="password2">confirm password</label>
              <Input
                type={"password"}
                name="password2"
                value={formData.password2}
                handleChange={handleChange}
              />
            </Formspan>
          </div>
        )}
        {/* contact */}
        {page === 2 && (
          <div className="flex flex-col gap-4 capitalize text-sm font-semibold">
            <Formspan>
              <label htmlFor="phone">phone</label>
              <Input
                type={"text"}
                name="phone"
                value={formData.phone}
                handleChange={handleChange}
              />
            </Formspan>
            <Formspan>
              <label htmlFor="address">street address</label>
              <Input
                type={"text"}
                name="address"
                value={formData.address}
                handleChange={handleChange}
              />
            </Formspan>
            <Formspan>
              <label htmlFor="country">country</label>
              <select
                className="font-normal border p-2 outline-[#2563EB]"
                name="country"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="">select country</option>
                {/* Add country options */}
              </select>
            </Formspan>
            <Formspan>
              <label htmlFor="state">state</label>
              <select
                className="font-normal border p-2 outline-[#2563EB]"
                name="state"
                value={formData.state}
                onChange={handleChange}
              >
                <option value="">select state</option>
                {/* Add state options */}
              </select>
            </Formspan>
            <Formspan>
              <label htmlFor="city">city</label>
              <Input
                type={"text"}
                name="city"
                value={formData.city}
                handleChange={handleChange}
              />
            </Formspan>
            <Formspan>
              <label htmlFor="zip">zip code</label>
              <Input
                type={"text"}
                name="zip"
                value={formData.zip}
                handleChange={handleChange}
              />
            </Formspan>
          </div>
        )}
        {/* verify */}
        {page === 3 && (
          <div className="flex flex-col gap-4 capitalize text-sm font-semibold">
            <Formspan>
              <label htmlFor="ssn">social security number</label>
              <Input
                type={"text"}
                name="ssn"
                value={formData.ssn}
                handleChange={handleChange}
              />
            </Formspan>
            <Formspan>
              <label htmlFor="dob">date of birth</label>
              <Input
                type={"date"}
                name="dob"
                value={formData.dob}
                handleChange={handleChange}
              />
            </Formspan>
            <Formspan>
              <label htmlFor="nationality">nationality</label>
              <select
                className="font-normal border p-2 outline-[#2563EB]"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
              >
                <option value="">select nationality</option>
                {/* Add nationality options */}
              </select>
            </Formspan>
            <Formspan>
              <label htmlFor="currency">currency</label>
              <select
                className="font-normal border p-2 outline-[#2563EB]"
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
              <label htmlFor="investmentExperience">
                how much investment experience do you have?
              </label>
              <select
                className="font-normal border p-2 outline-[#2563EB]"
                name="investmentExperience"
                value={formData.investmentExperience}
                onChange={handleChange}
              >
                <option value="">select an answer</option>
                <option value="none">none</option>
                <option value="beginner">beginner</option>
                <option value="intermediate">I know what I'm doing</option>
                <option value="expert">I'm an expert</option>
              </select>
            </Formspan>
            <Formspan>
              <label htmlFor="employmentStatus">are you employed?</label>
              <select
                className="font-normal border p-2 outline-[#2563EB]"
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
              <label htmlFor="brokerageFamily">
                do you or a family member work for another brokerage?
              </label>
              <article className="flex items-center gap-2">
                <span className="flex">
                  yes{" "}
                  <input
                    type="radio"
                    name="brokerageFamily"
                    value="yes"
                    checked={formData.brokerageFamily === "yes"}
                    onChange={handleChange}
                  />
                </span>
                <span className="flex">
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
              <label htmlFor="referralCode">referral code (optional):</label>
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
              <p className="whitespace-nowrap text-xs">
                I have read &amp; accept <Link>Terms &amp; conditions.</Link>
              </p>
            </div>
          </div>
        )}
        {/* buttons */}
        <div className="flex justify-between p-2">
          {page > 1 && (
            <Button
              type={"button"}
              handleClick={handlePrevious}
              title={"previous"}
            />
          )}
          {page < 3 ? (
            <Button type={"button"} handleClick={handleNext} title={"next"} />
          ) : (
            <Button
              type={"submit"}
              handleClick={handleSubmit}
              title={"submit"}
            />
          )}
        </div>
      </form>
    </Section>
  );
};

export default Signup;
