import React, { useEffect } from "react";

import Changepass from "../components/Changepass";

import { MdMailOutline, MdPhone, MdPhonelink } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getAccessToken } from "../constants";
import { getUser } from "../features/userSlice";

const Userinput = ({ placeholder }) => {
  return (
    <input
      className="outline-none w-full p-2 border bg-transparent placeholder:font-normal placeholder:text-xs focus:border-none focus:outline-purple-500"
      type="text"
      placeholder={placeholder}
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
  const accessToken = getAccessToken();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    document.title = "Quadx - User Profile";
  }, []);

  useEffect(() => {
    if (accessToken) {
      dispatch(getUser());
    }
  }, [accessToken]);
  return (
    <div className="w-full lg:max-w-[1100px] lg:mx-auto flex flex-col items-center py-10 min-h-screen">
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
            <hr />

            <div className="flex flex-col gap-3 p-6">
              <div className="flex flex-col lg:flex-row w-full gap-5">
                <div className="flex flex-col w-full gap-1 ">
                  <Userlabel labelFor={"first name"} />
                  <Userinput placeholder={user?.firstname} />
                </div>
                <div className="flex flex-col w-full gap-1">
                  <Userlabel labelFor={"last name"} />
                  <Userinput placeholder={user?.lastname} />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row w-full gap-5 ">
                <div className="flex flex-col w-full gap-1 ">
                  <Userlabel labelFor={"email"} />
                  <Userinput placeholder={user?.email} />
                </div>
                <div className="flex flex-col w-full gap-1">
                  <Userlabel labelFor={"username"} />
                  <Userinput placeholder={user?.username} />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row w-full gap-5 ">
                <div className="flex flex-col w-full ">
                  <Userlabel labelFor={"address"} />
                  <Userinput placeholder={user?.address} />
                </div>
              </div>
              <button
                className="bg-purple-500 text-white border-none py-2.5 w-[140px] text-center rounded-sm capitalize font-medium text-sm mt-12 shadow-xl "
                // onClick={handleSubmit}
              >
                update{/* {!changeLoading ? "update" : "wait..."} */}
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
