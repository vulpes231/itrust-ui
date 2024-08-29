import React, { useEffect, useState } from "react";
import Formspan from "./Formspan";
import Label from "./Label";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updateUser } from "../features/userSlice";

const nationalities = [
  { code: "us", name: "United States" },
  { code: "ca", name: "Canada" },
  { code: "gb", name: "United Kingdom" },
  { code: "fr", name: "France" },
  { code: "it", name: "Italy" },
  { code: "nl", name: "Netherlands" },
];

const Stepthree = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    ssn: "",
    dob: "",
    nationality: "",
    currency: "usd",
    investmentExperience: "",
    occupation: "",
    brokerageFamily: "",
    referralCode: "",
    termsAccepted: false,
  });

  const [error, setError] = useState(false);

  const { updateUserLoading, updateUserError, userUpdated } = useSelector(
    (state) => state.user
  );

  const goToDash = () => {
    navigate("/dash");
  };

  const completeProfile = (e) => {
    e.preventDefault();
    // console.log("clicked");
    // Check if all fields are filled
    const isAnyFieldEmpty = Object.values(formData).some(
      (value) => value.trim() === ""
    );

    if (isAnyFieldEmpty) {
      // console.log("yes");
      // Set the error message if any field is empty
      setError("All fields are required!");
      return; // Exit the function to prevent further execution
    }

    // No empty fields, so proceed with dispatch and navigation
    dispatch(updateUser(formData));
    navigate("/dash");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="flex flex-col gap-4 capitalize text-sm font-semibold">
      <Formspan>
        <Label title={"social security number"} />
        <Input
          error={error}
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
          error={error}
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
          className={` ${
            error && " outline-red-500"
          } z-10 w-full rounded-md text-sm/[1.125rem] dark:bg-white bg-slate-950 dark:border-slate-200 border-slate-800 focus:border-purple-500 py-2 px-4 border-2 outline-none`}
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
        >
          <option value="">select nationality</option>
          {nationalities.map((na, index) => {
            return (
              <option key={index} value={na.name}>
                {na.name}
              </option>
            );
          })}
        </select>
      </Formspan>
      <Formspan>
        <Label title={"currency"} />
        <select
          className={` ${
            error && " outline-red-500"
          } z-10 w-full rounded-md text-sm/[1.125rem] dark:bg-white bg-slate-950 dark:border-slate-200 border-slate-800 focus:border-purple-500 py-2 px-4 border-2 outline-none`}
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
        <Label title={"how much investment experience do you have?"} />

        <select
          className={` ${
            error && " outline-red-500"
          } z-10 w-full rounded-md text-sm/[1.125rem] dark:bg-white bg-slate-950 dark:border-slate-200 border-slate-800 focus:border-purple-500 py-2 px-4 border-2 outline-none`}
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
        <Label title={" are you employed? "} />

        <select
          className={` ${
            error && " outline-red-500"
          } z-10 w-full rounded-md text-sm/[1.125rem] dark:bg-white bg-slate-950 dark:border-slate-200 border-slate-800 focus:border-purple-500 py-2 px-4 border-2 outline-none`}
          name="occupation"
          value={formData.occupation}
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
          title={" do you or a family member work for another brokerage? "}
        />

        <article className="flex items-center gap-4 text-xs font-thin">
          <span className="flex items-center gap-1">
            yes{" "}
            <input
              error={error}
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
              error={error}
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
          error={error}
          type={"text"}
          name="referralCode"
          value={formData.referralCode}
          handleChange={handleChange}
        />
      </Formspan>
      <div className="flex gap-2 items-center">
        <input
          // error={error}
          type="checkbox"
          name="termsAccepted"
          checked={formData.termsAccepted}
          onChange={handleChange}
        />
        <small className="whitespace-nowrap text-xs font-thin">
          I have read &amp; accept <Link>Terms &amp; conditions.</Link>
        </small>
      </div>
      {updateUserError && <p className="text-red-500">{updateUserError}</p>}
      <div className="pt-3">
        <Button
          type={"submit"}
          handleClick={completeProfile}
          title={!updateUserLoading ? "complete profile" : "wait..."}
        />
        <Button type={"submit"} handleClick={goToDash} title={"skip"} />
      </div>
    </div>
  );
};

export default Stepthree;
