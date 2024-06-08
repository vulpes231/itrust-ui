import React from "react";
import { MdCheck, MdCancel } from "react-icons/md";
const Toast = ({ success, message }) => {
  return (
    <div className="absolute top-[65px] right-3 w-[170px] flex flex-col p-6 items-center justify-center bg-[#fff] shadow-sm z-50 font-medium rounded-md text-green-500 capitalize gap-3 ">
      <span>{success ? <MdCheck /> : <MdCancel />}</span>
      <small className="">{message}</small>
    </div>
  );
};

export default Toast;
