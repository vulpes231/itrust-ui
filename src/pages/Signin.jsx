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
      <div className="container px-3">
        <div className="flex justify-center -mx-3">
          <form
            onSubmit={handleSubmit}
            className="w-full xs:w-4/5 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/3 px-3"
          >
            <div className="bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 w-full p-6 pt-5">
              <div className="mb-2">
                <h3 className="text-xl font-bold text-slate-700 dark:text-white mb-1">
                  Login
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  With valid credentials
                </p>
              </div>
              <div className="py-2">
                <label
                  htmlFor="emial-address"
                  className="inline-flex font-bold text-sm text-slate-600 dark:text-slate-200 cursor-pointer mb-2"
                >
                  Email Address
                </label>
                <div className="relative flex isolate w-full">
                  <input
                    className="z-10 w-full rounded-md text-sm/[1.125rem] bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-200 placeholder:text-slate-400 placeholder:dark:text-slate-500 border-slate-200 dark:border-slate-800 disabled:bg-slate-100 disabled:text-slate-400 focus:border-slate-200 focus:shadow-none focus:outline-none py-2 px-4 border"
                    type="text"
                    placeholder="example@email.com"
                    id="emial-address"
                    value={formData.username}
                    onChange={handleChange}
                    name={"username"}
                  />
                </div>
              </div>
              <div className="py-2">
                <label
                  htmlFor="password"
                  className="inline-flex font-bold text-sm text-slate-600 dark:text-slate-200 cursor-pointer mb-2 justify-between w-full items-center"
                >
                  Password
                  <a
                    className="text-xs text-blue-500 hover:text-blue-700"
                    href="#"
                  >
                    Forgot
                  </a>
                </label>
                <div className="relative flex isolate w-full">
                  <input
                    className="z-10 w-full rounded-md text-sm/[1.125rem] bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-200 placeholder:text-slate-400 placeholder:dark:text-slate-500 border-slate-200 dark:border-slate-800 disabled:bg-slate-100 disabled:text-slate-400 focus:border-slate-200 focus:shadow-none focus:outline-none py-2 px-4 border"
                    type="password"
                    // id="password"
                    value={formData.password}
                    onChange={handleChange}
                    name={"password"}
                  />
                </div>
              </div>
              {/* <span className="flex gap-1 items-center text-xs font-thin">
                <input type="checkbox" name="" id="" />
                <small>remember me</small>
              </span> */}
              <span
                className={
                  error
                    ? "flex text-red-500 text-xs capitalize bg-red-500 bg-opacity-10 p-2 rounded-md"
                    : "hidden"
                }
              >
                {error}
              </span>

              <div className="pt-3">
                <button className="inline-flex justify-center items-center font-medium transition-all text-sm px-5 py-2 gap-3 w-full rounded-md bg-blue-600 text-white hover:bg-blue-800">
                  {loading ? "Signing in..." : "Sign in"}
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* <small className="text-center text-xs text-slate-500 font-thin bg-red-500 w-full">
          Don't have an account?{" "}
          <Link
            to={"/signup"}
            className={`${styles.colors.primaryTextColor} capitalize font-bold`}
          >
            sign up
          </Link>
        </small> */}
      </div>

      {success && <Toast message={"Login successful"} success={true} />}
    </Section>
  );
};

export default Signin;
