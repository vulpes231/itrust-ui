import React, { useEffect, useState } from "react";
import Formspan from "./Formspan";
import Label from "./Label";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Steptwo = ({ formData, handleChange }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
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
  return (
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
  );
};

export default Steptwo;
