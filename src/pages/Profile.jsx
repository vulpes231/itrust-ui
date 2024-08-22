import React, { useEffect } from "react";
import Section from "../components/Section";
import Changepass from "../components/Changepass";

import { MdMailOutline, MdPhone, MdPhonelink } from "react-icons/md";

const Flexdiv = ({ children }) => {
  return <div className="flex flex-col  w-full">{children}</div>;
};

const Userinput = ({ placeholder }) => {
  return (
    <input
      className="outline-none w-full p-2 border-2 bg-transparent placeholder:capitalize placeholder:font-thin placeholder:text-xs"
      type="text"
      placeholder={placeholder}
      readOnly
    />
  );
};

const Userlabel = ({ labelFor }) => {
  return (
    <label htmlFor={labelFor} className="capitalize text-slate-400">
      {labelFor}
    </label>
  );
};

const Profile = () => {
  useEffect(() => {
    document.title = "Quadx - User Profile";
  }, []);
  return (
    <div className="w-full lg:max-w-[1100px] lg:mx-auto flex flex-col items-center py-10 min-h-screen">
      {/* <h3 className="text-sm lg:text-xl uppercase font-bold">
        profile settings
      </h3> */}
      <div className="grid lg:grid-cols-3 w-full">
        {/* image and personal */}
        <div className="flex flex-col items-center">
          <img src="" alt="" className="w-200px" />
          <h5>test user</h5>
          <small className="flex items-center gap-1">
            {" "}
            <MdMailOutline /> testuser@mail.com
          </small>
          <small className="flex items-center gap-1">
            <MdPhonelink /> +123456789
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
                  <Userinput placeholder={"firstname"} />
                </Flexdiv>
                <Flexdiv>
                  <Userlabel labelFor={"surname"} />
                  <Userinput placeholder={"lastname"} />
                </Flexdiv>
              </div>
              <div className="flex flex-col gap-2 md:flex-row">
                <Flexdiv>
                  <Userlabel labelFor={"username"} />
                  <Userinput placeholder={"username"} />
                </Flexdiv>
                <Flexdiv>
                  <Userlabel labelFor={"date of birth"} />
                  <Userinput placeholder={"lastname"} />
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
                  <Userinput placeholder={"phone number"} />
                </Flexdiv>
                <Flexdiv>
                  <Userlabel labelFor={"email"} />
                  <Userinput placeholder={"email"} />
                </Flexdiv>
              </div>
              <div className="flex flex-col gap-2 md:flex-row">
                <Flexdiv>
                  <Userlabel labelFor={"street address"} />
                  <Userinput placeholder={"123 example street"} />
                </Flexdiv>
              </div>
              <div className="flex flex-col gap-2 md:flex-row">
                <Flexdiv>
                  <Userlabel labelFor={"state"} />
                  <Userinput placeholder={"state"} />
                </Flexdiv>
                <Flexdiv>
                  <Userlabel labelFor={"city"} />
                  <Userinput placeholder={"city"} />
                </Flexdiv>
              </div>
              <div className="flex flex-col gap-2 md:flex-row">
                <Flexdiv>
                  <Userlabel labelFor={"zip"} />
                  <Userinput placeholder={"zip"} />
                </Flexdiv>
                <Flexdiv>
                  <Userlabel labelFor={"date of birth"} />
                  <Userinput placeholder={"lastname"} />
                </Flexdiv>
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
                  <Userinput placeholder={"ssn"} />
                </Flexdiv>
                <Flexdiv>
                  <Userlabel labelFor={"occupation"} />
                  <Userinput placeholder={"occupation"} />
                </Flexdiv>
              </div>

              <div className="flex flex-col gap-2 md:flex-row">
                <Flexdiv>
                  <Userlabel labelFor={"nationality"} />
                  <Userinput placeholder={"nationality"} />
                </Flexdiv>
                <Flexdiv>
                  <Userlabel labelFor={"currency"} />
                  <Userinput placeholder={"currency"} />
                </Flexdiv>
              </div>
              <div className="flex flex-col gap-2 md:flex-row">
                <Flexdiv>
                  <Userlabel labelFor={"experience"} />
                  <Userinput placeholder={"experience"} />
                </Flexdiv>
                <Flexdiv>
                  <Userlabel labelFor={"date of birth"} />
                </Flexdiv>
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
