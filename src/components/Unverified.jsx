import React from "react";

const Unverified = ({ user }) => {
  return (
    <div className="fixed bottom-5 right-5 bg-yellow-500 text-white p-6">
      <div className="flex items-center justify-center flex-col w-full sm:w-[180px]">
        <p>
          Your account is pending approval make sure you have verified your
          identity.
        </p>
      </div>
    </div>
  );
};

export default Unverified;
