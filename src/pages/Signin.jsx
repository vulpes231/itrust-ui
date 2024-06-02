// Signin.js
import React, { useEffect, useContext, useState } from "react";
import { TitleContext } from "../contexts/TitleContext";
import Section from "../components/Section";
import Formspan from "../components/Formspan";
import Input from "../components/Input";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../features/loginSlice";
// Button
const initialState = {
  username: "",
  password: "",
};
const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { changeTitle } = useContext(TitleContext);
  const [formData, setFormData] = useState(initialState);
  const { success, error, loading, accessToken } = useSelector(
    (state) => state.login
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // dispatch(loginUser(formData));
  };

  useEffect(() => {
    changeTitle("Quadx - Login");
  }, [changeTitle]);

  useEffect(() => {
    // let timeout
    if (success) {
      sessionStorage.setItem("accessToken", accessToken);

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }
  }, [dispatch, navigate, success, accessToken]);

  return (
    <Section>
      <div className="flex flex-col gap-1 items-center text-[#333]">
        <h3 className="capitalize font-semibold text-lg">
          sign in to your account.
        </h3>
        <small className="font-light text-slate-500">
          start automating your trades.
        </small>
      </div>
      <form
        action=""
        className="w-full border p-6 text-[#333] flex flex-col gap-6"
      >
        <div className="flex flex-col gap-4 capitalize text-sm font-semibold">
          <Formspan>
            <label htmlFor="username">username</label>
            <Input
              type={"text"}
              placeHolder={"Enter username"}
              value={formData.username}
              handleChange={handleChange}
              name={"username"}
            />
          </Formspan>
          <Formspan>
            <label htmlFor="username">username</label>
            <Input
              type={"text"}
              placeHolder={"Enter password"}
              value={formData.password}
              handleChange={handleChange}
              name={"password"}
            />
          </Formspan>
          <span className={error ? "flex text-red-500" : "hidden"}>
            {error}
          </span>
          <Button
            type={"submit"}
            handleClick={handleSubmit}
            title={loading ? "signing in..." : "sign in"}
            customClass={"font-bold"}
          />
        </div>
      </form>
    </Section>
  );
};

export default Signin;
