import React, { useEffect, useState } from "react";
import Formspan from "./Formspan";
import Label from "./Label";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { resetUpdateUser, updateUser } from "../features/userSlice";

const Steptwo = ({ pageSwitch }) => {
  const dispatch = useDispatch();
  const [countries, setCountries] = useState([]);

  const [error, setError] = useState(false);

  const { updateUserLoading, updateUserError, userUpdated } = useSelector(
    (state) => state.user
  );

  const [formData, setFormData] = useState({
    phone: "",
    address: "",
    country: "",
    state: "",
    city: "",
    zip: "",
  });

  const goToDash = (e) => {
    e.stopPropagation();
    e.preventDefault();
    window.location.href = "/dash";
  };

  const completeProfile = (e) => {
    e.stopPropagation();
    e.preventDefault();

    const isAnyFieldEmpty = Object.values(formData).some(
      (value) => value.trim() === ""
    );

    if (isAnyFieldEmpty) {
      setError("All fields are required!");
      return;
    }

    dispatch(updateUser(formData));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  useEffect(() => {
    // Fetch countries data from a source (e.g., REST API)
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        // Extract country names and codes
        const options = data.map((country) => ({
          value: country.name.common,
          label: country.name.common,
          code: country.cca2, // optional: you might need this for states
        }));

        // Sort countries alphabetically by name
        options.sort((a, b) => a.label.localeCompare(b.label));

        setCountries(options);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  useEffect(() => {
    if (userUpdated) {
      dispatch(resetUpdateUser());
      pageSwitch();
    }
  }, [userUpdated]);

  return (
    <div className="flex flex-col gap-4 capitalize text-sm font-semibold">
      <Formspan>
        <Label title={"phone"} />
        <Input
          error={error}
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
          error={error}
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
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="z-10 w-full rounded-md text-sm/[1.125rem] dark:bg-white bg-slate-950 dark:border-slate-200 border-slate-800 focus:border-purple-500 py-2 px-4 border-2 outline-none"
        >
          <option value="">choose country</option>
          {countries.map((cty) => {
            return <option key={cty.code}>{cty.value}</option>;
          })}
        </select>
      </Formspan>
      <Formspan>
        <Label title={"state"} />
        <Input
          error={error}
          type={"text"}
          name="state"
          value={formData.state}
          handleChange={handleChange}
          placeHolder={"Enter state"}
        />
      </Formspan>
      <Formspan>
        <Label title={"city"} />
        <Input
          error={error}
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
          error={error}
          type={"text"}
          name="zip"
          value={formData.zip}
          handleChange={handleChange}
          placeHolder={"Enter Zipcode"}
        />
      </Formspan>
      {updateUserError && <p className="text-red-500">{updateUserError}</p>}
      <div className="pt-3 flex flex-col gap-4">
        <Button
          type={"submit"}
          handleClick={completeProfile}
          title={!updateUserLoading ? "next" : "wait..."}
        />
        <Button type={"submit"} handleClick={goToDash} title={"skip"} />
      </div>
    </div>
  );
};

export default Steptwo;
