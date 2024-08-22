import React, { useEffect } from "react";

import Changepass from "../components/Changepass";

import { MdMailOutline, MdPhone, MdPhonelink } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getAccessToken } from "../constants";
import { getUser } from "../features/userSlice";

const Flexdiv = ({ children }) => {
  return <div className="flex flex-col  w-full">{children}</div>;
};

const Userinput = ({ placeholder }) => {
  return (
    <input
      className="outline-none w-full p-2 border-2 dark:border-slate-950 bg-transparent placeholder:capitalize placeholder:font-thin placeholder:text-xs"
      type="text"
      placeholder={placeholder}
      readOnly
    />
  );
};

const Userlabel = ({ labelFor }) => {
  return (
    <label
      htmlFor={labelFor}
      className="capitalize text-slate-400 dark:text-slate-800"
    >
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
      {/* <h3 className="text-sm lg:text-xl uppercase font-bold">
        profile settings
      </h3> */}
      <div className="grid lg:grid-cols-3 w-full">
        {/* image and personal */}
        <div className="flex flex-col items-center mt-8">
          <img src="" alt="" className="w-200px" />
          <h5 className="font-bold capitalize">{user?.username}</h5>
          <small className="flex items-center gap-1">
            {" "}
            <MdMailOutline /> {user?.email}
          </small>
          <small className="flex items-center gap-1">
            <MdPhonelink /> {user?.phone}
          </small>
        </div>
        {/* others */}
        <div className="col-span-2">
          <div className="flex flex-col gap-2 py-5">
            <h4 className="text-xs lg:text-lg font-medium capitalize">
              personal information
            </h4>
            <form action="" className="text-xs lg:text-sm flex flex-col gap-1">
              <div className="flex flex-col gap-2 md:flex-row">
                <Flexdiv>
                  <Userlabel labelFor={"name"} />
                  <Userinput placeholder={user?.firstname || "John"} />
                </Flexdiv>
                <Flexdiv>
                  <Userlabel labelFor={"surname"} />
                  <Userinput placeholder={user?.firstname || "Doe"} />
                </Flexdiv>
              </div>
              <div className="flex flex-col gap-2 md:flex-row">
                <Flexdiv>
                  <Userlabel labelFor={"username"} />
                  <Userinput placeholder={user?.username || "Testuser"} />
                </Flexdiv>
                <Flexdiv>
                  <Userlabel labelFor={"date of birth"} />
                  <Userinput placeholder={user?.dob || "yyyy/mm/dd"} />
                </Flexdiv>
              </div>
            </form>
          </div>

          {/* contact */}
          <div className="flex flex-col gap-2 py-5">
            <h4 className="text-xs lg:text-lg font-medium capitalize">
              contact information
            </h4>
            <form action="" className="text-xs lg:text-sm flex flex-col gap-1">
              <div className="flex flex-col gap-2 md:flex-row">
                <Flexdiv>
                  <Userlabel labelFor={"phone"} />
                  <Userinput placeholder={user?.phone || "+1234567890"} />
                </Flexdiv>
                <Flexdiv>
                  <Userlabel labelFor={"email"} />
                  <Userinput
                    placeholder={user?.email || "example@example.com"}
                  />
                </Flexdiv>
              </div>
              <div className="flex flex-col gap-2 md:flex-row">
                <Flexdiv>
                  <Userlabel labelFor={"street address"} />
                  <Userinput
                    placeholder={user?.address?.street || "123 example street"}
                  />
                </Flexdiv>
              </div>
              <div className="flex flex-col gap-2 md:flex-row">
                <Flexdiv>
                  <Userlabel labelFor={"state"} />
                  <Userinput placeholder={user?.address?.state || "Meza"} />
                </Flexdiv>
                <Flexdiv>
                  <Userlabel labelFor={"city"} />
                  <Userinput placeholder={user?.address?.city || "Downtown"} />
                </Flexdiv>
              </div>
              <div className="flex flex-col gap-2 md:flex-row">
                <Flexdiv>
                  <Userlabel labelFor={"zip"} />
                  <Userinput placeholder={user?.address?.zipcode || "12345"} />
                </Flexdiv>
                <Flexdiv></Flexdiv>
              </div>
            </form>
          </div>

          {/* additional */}
          <div className="flex flex-col gap-2 py-5">
            <h4 className="text-xs lg:text-lg font-medium capitalize">
              additional information
            </h4>
            <form action="" className="text-xs lg:text-sm flex flex-col gap-1">
              <div className="flex flex-col gap-2 md:flex-row">
                <Flexdiv>
                  <Userlabel labelFor={"social security number"} />
                  <Userinput placeholder={user?.ssn || "NONE"} />
                </Flexdiv>
                <Flexdiv>
                  <Userlabel labelFor={"occupation"} />
                  <Userinput placeholder={user?.occupation || "NONE"} />
                </Flexdiv>
              </div>

              <div className="flex flex-col gap-2 md:flex-row">
                <Flexdiv>
                  <Userlabel labelFor={"nationality"} />
                  <Userinput placeholder={user?.nationality || "alien"} />
                </Flexdiv>
                <Flexdiv>
                  <Userlabel labelFor={"currency"} />
                  <Userinput placeholder={user?.currency || "NONE"} />
                </Flexdiv>
              </div>
              <div className="flex flex-col gap-2 md:flex-row">
                <Flexdiv>
                  <Userlabel labelFor={"experience"} />
                  <Userinput placeholder={user?.experience || "NONE"} />
                </Flexdiv>
                <Flexdiv></Flexdiv>
              </div>
            </form>
          </div>

          <div className="my-5">
            <button className="bg-purple-500 text-white border-none py-2.5 w-[180px] text-center rounded-3xl capitalize font-medium text-sm">
              edit information
            </button>
          </div>
          <hr />
          <Changepass />
        </div>
      </div>
    </div>
  );
};

export default Profile;
