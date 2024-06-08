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
import { FaEye, FaUser } from "react-icons/fa";
import { Toast } from "../components";

const initialState = {
  username: "",
  password: "",
};

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { changeTitle } = useContext(TitleContext);
  const [formData, setFormData] = useState(initialState);
  const [showPass, setShowPass] = useState(false);

  const { success, error, loading, accessToken } = useSelector(
    (state) => state.login
  );

  // console.log(accessToken);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleShowPass = () => {
    setShowPass((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  useEffect(() => {
    changeTitle("Quadx - Login");
  }, [changeTitle]);

  useEffect(() => {
    // console.log(accessToken);
    if (accessToken) {
      const tokenString = JSON.stringify(accessToken);
      sessionStorage.setItem("accessToken", tokenString);
      sessionStorage.setItem("username", formData.username);
      console.log(tokenString);
      window.location.href = "/dash";
    }
  }, [accessToken]);

  return (
    <Section>
      <div className="flex flex-col gap-1 items-center text-[#333] mt-8">
        <h3 className="capitalize font-semibold text-lg">welcome back!</h3>
        <small className="font-light text-slate-500 capitalize">
          sign in to your account.
        </small>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full border p-6 text-[#333] flex flex-col gap-6 md:w-[350px] md:mx-auto bg-[#fff] rounded-md"
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
              className={`${styles.colors.darkText} absolute top-[31px] right-2 text-xs `}
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
              type={showPass ? "text" : "password"} // Change to password type
              placeHolder={"Enter password"}
              value={formData.password}
              handleChange={handleChange}
              name={"password"}
            />
            <span
              className={`${styles.colors.darkText} absolute top-[34px] right-2 text-xs cursor-pointer`}
              onClick={handleShowPass}
            >
              {showPass ? <FaEye /> : <MdLock />}
            </span>
          </Formspan>
          <span className="flex gap-1 items-center text-xs font-thin">
            <input type="checkbox" name="" id="" />
            <small>remember me</small>
          </span>
          <span
            className={
              error
                ? "flex text-red-500 text-xs capitalize bg-red-500 bg-opacity-10 p-2 rounded-md"
                : "hidden"
            }
          >
            {error}
          </span>
          <Button
            type={"submit"}
            title={loading ? "Signing in..." : "Sign in"} // Corrected sign in text
            customClass={"font-bold"}
          />
        </div>
      </form>
      <small className="text-center text-xs text-slate-500 font-thin">
        Don't have an account?{" "}
        <Link
          to={"/signup"}
          className={`${styles.colors.primaryTextColor} capitalize font-bold`}
        >
          sign up
        </Link>
      </small>
      {success && <Toast message={"Login successful"} success={true} />}
    </Section>
  );
};

export default Signin;
