// Signin.js
import React, { useEffect, useContext, useState } from "react";
import { TitleContext } from "../contexts/TitleContext";
import Section from "../components/Section";
import Formspan from "../components/Formspan";
import Input from "../components/Input";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../features/loginSlice";
import { styles } from "../constants/styles";
import Label from "../components/Label";
import { MdLock } from "react-icons/md";
import { FaUser } from "react-icons/fa";

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
        <h3 className="capitalize font-semibold text-lg">welcome back!</h3>
        <small className="font-light text-slate-500 capitalize">
          sign in to your account.
        </small>
      </div>
      <form
        action=""
        className="w-full border p-6 text-[#333] flex flex-col gap-6 md:w-[350px] md:mx-auto"
      >
        <div className="flex flex-col gap-4 capitalize text-sm font-semibold">
          <Formspan>
            <Label title={"username"} />
            <Input
              type={"text"}
              placeHolder={"Enter username"}
              value={formData.username}
              handleChange={handleChange}
              name={"username"}
            />
            <FaUser
              className={`${styles.colors.primaryTextColor} absolute top-[31px] right-2 text-xs `}
            />
          </Formspan>

          <Formspan>
            <span className="flex justify-between mb-1">
              <Label title={"password"} />
              <Link
                className={`${styles.colors.primaryTextColor} text-xs font-thin `}
              >
                Forgot password?
              </Link>
            </span>
            <Input
              type={"text"}
              placeHolder={"Enter password"}
              value={formData.password}
              handleChange={handleChange}
              name={"password"}
            />
            <MdLock
              className={`${styles.colors.primaryTextColor} absolute top-[34px] right-2 text-xs `}
            />
          </Formspan>
          <span className="flex gap-1 items-center text-xs font-thin">
            <input type="checkbox" name="" id="" />
            <small>remember me</small>
          </span>
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
      <p className="text-center text-xs text-slate-500 font-thin">
        Don't have an account?{" "}
        <Link
          to={"/signup"}
          className={`${styles.colors.primaryTextColor} capitalize `}
        >
          sign up
        </Link>
      </p>
    </Section>
  );
};

export default Signin;
