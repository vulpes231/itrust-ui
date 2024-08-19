import React, { useEffect, useContext, useState } from "react";
import { TitleContext } from "../contexts/TitleContext";
import Section from "../components/Section";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../features/loginSlice";
import { styles } from "../constants/styles";
import { whitelogo } from "../assets";
// import { Toast } from "../components";

const initialState = {
  email: "",
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
    dispatch(loginUser(formData));
  };

  useEffect(() => {
    changeTitle("Quadx - Login");
  }, [changeTitle]);

  useEffect(() => {
    if (accessToken) {
      const tokenString = JSON.stringify(accessToken);
      sessionStorage.setItem("accessToken", tokenString);
      sessionStorage.setItem("username", formData.username);
      // console.log(tokenString);

      navigate("/dash");
    }
  }, [accessToken]);

  return (
    <Section>
      <div className="container px-3">
        <div className="flex justify-center -mx-3">
          <form
            onSubmit={handleSubmit}
            className="w-full xs:w-4/5 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/3 px-3 flex flex-col gap-4"
          >
            <figure className=" flex items-center justify-center py-5">
              <img src={whitelogo} alt="" className="w-[100px] " />
            </figure>

            <div className="dark:bg-white bg-slate-950 rounded-lg border dark:border-slate-200 border-slate-800 w-full p-6 pt-5">
              <div className="mb-2">
                <h3 className="text-xl font-bold  mb-1">Login</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  With valid credentials
                </p>
              </div>
              <div className="py-2">
                <label
                  htmlFor="email-address"
                  className="inline-flex font-bold text-sm  cursor-pointer mb-2"
                >
                  Email Address
                </label>
                <div className="relative flex isolate w-full">
                  <input
                    className="z-10 w-full rounded-md text-sm/[1.125rem] dark:bg-white bg-slate-950 dark:border-slate-200 border-slate-800 focus:border-purple-500 py-2 px-4 border-2 outline-none"
                    type="text"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    name={"email"}
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="py-2">
                <label
                  htmlFor="password"
                  className="inline-flex font-bold text-sm cursor-pointer mb-2 justify-between w-full items-center"
                >
                  Password
                  <a
                    className="text-xs text-[#cd99ff] hover:text-[#805af5]"
                    href="#"
                  >
                    Forgot
                  </a>
                </label>
                <div className="relative flex isolate w-full">
                  <input
                    className="z-10 w-full rounded-md text-sm/[1.125rem] dark:bg-white bg-slate-950 dark:border-slate-200 border-slate-800 focus:border-purple-500 py-2 px-4 border-2 outline-none"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    name={"password"}
                    autoComplete="off"
                  />
                </div>
              </div>

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
                <button
                  className={`inline-flex justify-center items-center font-medium transition-all text-sm px-5 py-2 gap-3 w-full rounded-md ${styles.colors.primaryBgColor} text-white ${styles.hover.lightBg}`}
                >
                  {loading ? "Signing in..." : "Sign in"}
                </button>
              </div>
              <p className="text-center text-xs font-sm py-3">
                Don't have an account yet?{" "}
                <Link
                  className={`${styles.colors.primaryTextColor}`}
                  to={"/signup"}
                >
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* {success && <Toast message={"Login successful"} success={true} />} */}
    </Section>
  );
};

export default Signin;
