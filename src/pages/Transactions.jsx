import React, { useContext, useEffect } from "react";
import { TitleContext } from "../contexts/TitleContext";
import { getAccessToken } from "../constants";
import { History, Section } from "../components";
import { styles } from "../constants/styles";

const Transactions = () => {
  const accessToken = getAccessToken();
  const { changeTitle } = useContext(TitleContext);
  const username = sessionStorage.getItem("username");
  useEffect(() => {
    changeTitle("Quadx - History");

    if (!accessToken) {
      navigate("/signin");
    }
  }, [accessToken]);

  return (
    <Section>
      <div className="container px-3 font-[Montserrat] space-y-4">
        <div className="mb-7 flex justify-between items-center -mx-3">
          <div className="px-3">
            <h2 className="text-xl font-bold text-slate-700 dark:text-white mb-2">
              History
            </h2>
            <ul className="inline-flex items-center text-xs font-medium text-slate-500 dark:text-slate-300 gap-2">
              <li>Home </li>
              <li className="inline-flex items-center mt-0.5">{`>`}</li>
              <li>{username}</li>
            </ul>
          </div>
          <div className="px-3">
            <button
              className={`inline-flex justify-center items-center font-medium transition-all text-sm px-5 py-2 gap-3 rounded-md ${styles.hover.lightBg}  text-white ${styles.colors.primaryBgColor} `}
            >
              Deposit
            </button>
          </div>
        </div>
        {/* content */}
        <div>
          <History />
        </div>
      </div>
    </Section>
  );
};

export default Transactions;
