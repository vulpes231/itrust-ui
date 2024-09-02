import React, { useEffect, useState } from "react";

import Changepass from "../components/Changepass";

import { useDispatch, useSelector } from "react-redux";
import { getAccessToken } from "../constants";
import { getUser, updateUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

const Userinput = ({ placeholder, value, handleChange, name, readOnly }) => {
  return (
    <input
      className="outline-none w-full p-2 border bg-transparent placeholder:font-normal placeholder:text-xs focus:border-none focus:outline-purple-500 order border-slate-600 dark:border-slate-200"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      name={name}
      readOnly={readOnly}
    />
  );
};

const Userlabel = ({ labelFor }) => {
  return (
    <label htmlFor={labelFor} className="capitalize text-sm font-medium">
      {labelFor}
    </label>
  );
};

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = getAccessToken();
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
  });

  const { user, updateUserLoading, updateUserError, userUpdated } = useSelector(
    (state) => state.user
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(updateUser(form));
  };

  useEffect(() => {
    document.title = "Quadx - User Profile";
  }, []);

  useEffect(() => {
    if (!accessToken) {
      console.log("yes");
      // dispatch(resetLogin());
      navigate("/signin");
    }
  }, [accessToken]);

  useEffect(() => {
    if (accessToken) {
      dispatch(getUser());
    }
  }, [accessToken]);

  useEffect(() => {
    if (userUpdated) {
      window.location.reload();
    }
  }, [userUpdated]);
  return (
    <div className="w-full lg:max-w-[1100px] font-[Montserrat] lg:mx-auto flex flex-col items-center py-10 min-h-screen">
      <div className="flex justify-between items-center w-full py-10 text-xs">
        <h3 className="text-sm lg:text-2xl capitalize font-bold">profile</h3>
        <span className="flex items-center gap-2">
          Dashboard<span>{">"} Profile</span>
        </span>
      </div>
      <div className="grid lg:grid-cols-3 w-full gap-6 ">
        {/* image and personal */}
        <div className="flex flex-col lg:col-span-2 bg-black dark:bg-white">
          <form action="" className="flex flex-col gap-2">
            <h4 className="text-xs lg:text-lg font-semibold capitalize p-6">
              personal information
            </h4>
            <hr className="border border-slate-600 dark:border-slate-200" />

            <div className="flex flex-col gap-3 p-6">
              <div className="flex flex-col lg:flex-row w-full gap-5">
                <div className="flex flex-col w-full gap-1 ">
                  <Userlabel labelFor={"first name"} />
                  <Userinput
                    placeholder={user?.firstname}
                    handleChange={handleChange}
                    value={form.firstname}
                    name={"firstname"}
                  />
                </div>
                <div className="flex flex-col w-full gap-1">
                  <Userlabel labelFor={"last name"} />
                  <Userinput
                    placeholder={user?.lastname}
                    handleChange={handleChange}
                    value={form.lastname}
                    name={"lastname"}
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row w-full gap-5 ">
                <div className="flex flex-col w-full gap-1 ">
                  <Userlabel labelFor={"email"} />
                  <Userinput
                    placeholder={user?.email}
                    handleChange={handleChange}
                    value={form.email}
                    name={"email"}
                  />
                </div>
                <div className="flex flex-col w-full gap-1">
                  <Userlabel labelFor={"username"} />
                  <Userinput
                    placeholder={user?.username}
                    handleChange={handleChange}
                    value={form.username}
                    name={"username"}
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row w-full gap-5 ">
                <div className="flex flex-col w-full ">
                  <Userlabel labelFor={"address"} />
                  <Userinput placeholder={user?.address} readOnly={true} />
                </div>
              </div>
              {updateUserError && (
                <p className="text-red-500">{updateUserError}</p>
              )}
              <button
                className="bg-purple-500 text-white border-none py-2.5 w-[140px] text-center rounded-sm capitalize font-medium text-sm mt-12 shadow-xl "
                onClick={handleSubmit}
              >
                {!updateUserLoading ? "update" : "wait..."}
              </button>
            </div>
          </form>
        </div>
        {/* others */}
        <div className="">
          <Changepass />
        </div>
      </div>
    </div>
  );
};

export default Profile;
