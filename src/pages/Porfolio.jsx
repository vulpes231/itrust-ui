import React, { useContext, useEffect } from "react";
import { TitleContext } from "../contexts/TitleContext";
import { getAccessToken } from "../constants";

const Porfolio = () => {
  const accessToken = getAccessToken();
  const { changeTitle } = useContext(TitleContext);
  const username = sessionStorage.getItem("username");
  useEffect(() => {
    changeTitle("Quadx - Porfolio");

    if (!accessToken) {
      navigate("/signin");
    }
  }, [accessToken]);
  return (
    <div className="min-h-screen">
      <div className="container px-3 font-[Montserrat] space-y-4 mt-10">
        <div className="">
          <h2 className="text-xl font-bold text-slate-700 dark:text-white mb-2">
            Portfolio
          </h2>
          <ul className="inline-flex items-center text-xs font-medium text-slate-500 dark:text-slate-300 gap-2">
            <li>Home </li>
            <li className="inline-flex items-center mt-0.5">{`>`}</li>
            <li className="capitalize">{username}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Porfolio;
