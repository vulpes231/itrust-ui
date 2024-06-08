import React from "react";
import { MdCheck, MdCancel } from "react-icons/md";
const Toast = ({ success, message }) => {
  return (
    <div className="absolute top-0 right-0 w-[150px] flex flex-col p-4 items-center justify-center bg-slate-100 ">
      <span>{success ? <MdCheck /> : <MdCancel />}</span>
      <p>{message}</p>
    </div>
  );
};

export default Toast;
