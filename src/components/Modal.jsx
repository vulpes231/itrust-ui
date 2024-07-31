import React from "react";

const Modal = ({ icon, message, customClass }) => {
  return (
    <div
      className={`bg-white p-6 absolute top-0 right-0 flex flex-col items-center justify-center shadow-md rounded-lg z-50 text-green font-medium text-sm ${customClass}`}
    >
      <span>{icon}</span>
      <span>{message}</span>
    </div>
  );
};

export default Modal;
